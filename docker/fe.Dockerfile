# Install dependencies only when needed
FROM node:18-slim AS deps

WORKDIR /app

ARG WORKSPACE
ARG WORKSPACE_PATH

COPY .yarn .yarn
COPY .yarnrc.yml package.json yarn.lock ./
COPY $WORKSPACE_PATH $WORKSPACE_PATH

RUN yarn --inline-builds

# Rebuild the source code only when needed
FROM node:18-slim AS builder

WORKDIR /app

ARG WORKSPACE
ARG WORKSPACE_PATH

COPY --from=deps /app/$WORKSPACE_PATH ./$WORKSPACE_PATH
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.yarn .yarn
COPY --from=deps /app/.yarnrc.yml /app/package.json /app/yarn.lock ./

RUN cd fe \
  && yarn build \
  && cd .. \
  && yarn workspaces focus --all --production

# Production image, copy all the files and run next
FROM node:18-alpine AS runner

WORKDIR /app/$WORKSPACE_PATH

ENV NODE_ENV production
ENV PORT 3000

ARG WORKSPACE
ARG WORKSPACE_PATH

ARG BUILD_TIME
ARG VERSION
ARG REVISION

ENV BUILD_TIME ${BUILD_TIME}
ENV VERSION ${VERSION}
ENV REVISION ${REVISION}

COPY --from=builder --chown=node:node /app/$WORKSPACE_PATH/.next/standalone ./
COPY --from=builder --chown=node:node /app/$WORKSPACE_PATH/.next/standalone/$WORKSPACE_PATH/server.js ./
COPY --from=builder --chown=node:node /app/$WORKSPACE_PATH/.next/standalone/$WORKSPACE_PATH/.next ./.next
COPY --from=builder --chown=node:node /app/$WORKSPACE_PATH/.next/static ./.next/static
COPY --from=builder --chown=node:node /app/$WORKSPACE_PATH/public ./public

USER node:node

EXPOSE ${PORT}

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry.
ENV NEXT_TELEMETRY_DISABLED 1

CMD ["node", "server.js"]

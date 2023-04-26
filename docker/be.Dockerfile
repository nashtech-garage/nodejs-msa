FROM node:18-slim AS deps

WORKDIR /app

ARG WORKSPACE
ARG WORKSPACE_PATH

COPY .yarn .yarn
COPY .yarnrc.yml package.json yarn.lock ./
COPY $WORKSPACE_PATH $WORKSPACE_PATH

RUN yarn workspace $WORKSPACE install

FROM node:18-slim AS builder

WORKDIR /app

ARG WORKSPACE
ARG WORKSPACE_PATH

RUN apt-get update \
  && apt-get -y install bzip2

COPY --from=deps /app/$WORKSPACE_PATH ./$WORKSPACE_PATH
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/.yarn .yarn
COPY --from=deps /app/.yarnrc.yml /app/package.json /app/yarn.lock ./

RUN yarn workspaces foreach -vp run build \
  && yarn workspaces focus --all --production

FROM node:18-slim AS runner

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

WORKDIR /app

RUN chown -R node:node /app

COPY --from=builder --chown=node:node /app/.yarn ./.yarn
COPY --from=builder --chown=node:node /app/node_modules ./node_modules

COPY --from=builder --chown=node:node /app/.yarnrc.yml /app/package.json /app/yarn.lock ./

COPY --from=builder --chown=node:node /app/$WORKSPACE_PATH/dist ./$WORKSPACE_PATH/dist
COPY --from=builder --chown=node:node /app/$WORKSPACE_PATH/package.json ./$WORKSPACE_PATH

USER node:node

EXPOSE ${PORT}

WORKDIR /app/$WORKSPACE_PATH

CMD [ "node", "dist/main.js" ]

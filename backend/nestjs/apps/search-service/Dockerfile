ARG NODE_VERSION=20.17.0-alpine

# Stage 1: Install dependencies
FROM node:${NODE_VERSION} AS base

WORKDIR /usr/src/app

# Copy root package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code of the service and necessary config
COPY apps/search-service ./apps/search-service
COPY libs ./libs
COPY nest-cli.json ./
COPY tsconfig*.json ./

# Stage 2: Build the application
FROM base AS builder
RUN npm run build

# Stage 3: Development setup
FROM base AS dev
# Install Nest CLI globally
RUN npm install -g @nestjs/cli
# Expose the application port (optional)
EXPOSE 3000
# Command to run application in dev mode
CMD ["nest", "start", "search-service", "--watch"]

# Stage 4: Setup the production image
FROM node:${NODE_VERSION} AS production

WORKDIR /usr/src/app

# Copy the build artifacts from the builder stage
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Expose the application port
EXPOSE 3000

# Command to run the application
CMD ["node", "dist/main.js"]
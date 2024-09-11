ARG NODE_VERSION=20.17.0-alpine

# Stage 1: Build the application
FROM node:${NODE_VERSION} AS base

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Stage 2: Build the application
FROM base AS builder
RUN npm run build

# Stage 3: Create the development image
FROM builder AS dev
# Expose port
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "run", "dev"]

# Stage 4: Setup the production image
FROM node:${NODE_VERSION} AS production

# Set working directory
WORKDIR /usr/src/app

# Copy built application from the builder stage
COPY --from=builder /usr/src/app/.next/standalone ./.next/standalone
COPY --from=builder /usr/src/app/.next/static ./.next/static

# Expose port
EXPOSE 3000

# Start the application
CMD ["node", ".next/standalone/server.js"]

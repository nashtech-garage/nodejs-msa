# Build stage
FROM ghcr.io/nashtech-garage/nodejs-msa/nodejs-msa-listing:build as builder

COPY . .

RUN npx prisma generate
RUN npm run build

# Prod stage
FROM ghcr.io/nashtech-garage/nodejs-msa/nodejs-msa-listing:release

COPY --from=builder /app/dist /app

EXPOSE 3000
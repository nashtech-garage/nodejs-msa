# Build stage
FROM ghcr.io/nashtech-garage/nodejs-msa/listing:build as builder

COPY . .

RUN npm run build


# Prod stage
FROM ghcr.io/nashtech-garage/nodejs-msa/listing:release

COPY --from=builder /app/dist /app

EXPOSE 3000
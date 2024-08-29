# Build stage
FROM ghcr.io/nashtech-garage/nodejs-msa/nodejs-msa-payment:build as builder

COPY . .

RUN npm run build


# Prod stage
FROM ghcr.io/nashtech-garage/nodejs-msa/payment:release

COPY --from=builder /app/dist /app

EXPOSE 3000
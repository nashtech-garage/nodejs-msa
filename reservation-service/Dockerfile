# Build stage
FROM ghcr.io/nashtech-garage/nodejs-msa/nodejs-msa-reservation:build as builder

COPY . .

RUN npm run build


# Prod stage
FROM ghcr.io/nashtech-garage/nodejs-msa/nodejs-msa-reservation:release

COPY --from=builder /app/dist /app

EXPOSE 3000
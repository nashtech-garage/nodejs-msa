# Build stage
FROM ghcr.io/nashtech-garage/nodejs-msa/bff:build as builder

COPY . .

RUN npm run build


# Prod stage
FROM ghcr.io/nashtech-garage/nodejs-msa/bff:release

COPY --from=builder /app/dist /app

EXPOSE 3000
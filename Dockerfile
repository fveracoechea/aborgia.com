FROM oven/bun:1.3-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN bun install --frozen-lockfile
COPY . ./
RUN bun run build

FROM oven/bun:1.3-alpine AS runner 
WORKDIR /app

COPY --from=builder /app/.output ./.output
COPY --from=builder /app/package*.json ./
ENV NODE_ENV=production
EXPOSE 3000
CMD ["bun", ".output/server/index.mjs"]

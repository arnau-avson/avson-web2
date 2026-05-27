FROM node:22-alpine

WORKDIR /app

# Copy and install API server dependencies
COPY code_old/server/ ./server/
WORKDIR /app/server
RUN npm install

# Copy static site files
WORKDIR /app
COPY code_new/ ./public/

# Expose port 3000 (serves both site and API)
EXPOSE 3000

# Start server
CMD ["node", "server/index.js"]

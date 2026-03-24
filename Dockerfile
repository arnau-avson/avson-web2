FROM node:22-alpine

WORKDIR /app

# Install frontend dependencies and build
COPY code/package.json code/package-lock.json ./
RUN npm ci
COPY code/ .
RUN npm run build

# Install server dependencies
WORKDIR /app/server
RUN npm install

# Expose ports: 3000 (frontend) and 3011 (API)
EXPOSE 3000 3011

# Start both services
WORKDIR /app
CMD sh -c "node server/index.js & npm run preview"

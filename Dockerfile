FROM node:22-alpine

WORKDIR /app

# Copiar el proyecto React
COPY code_new/ ./

# Instalar dependencias y construir
RUN npm install && npm run build

# Instalar PM2 globalmente
RUN npm install -g pm2

# Exponer el puerto que usará pm2 serve
EXPOSE 3000

# Servir el directorio dist con pm2 en primer plano (--no-daemon)
CMD ["pm2", "serve", "./dist", "3000", "--spa", "--name", "avson-web", "--no-daemon"]
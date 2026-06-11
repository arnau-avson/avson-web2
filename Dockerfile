FROM nginx:alpine

# Copiar los ficheros estáticos del sitio web (HTML, CSS, JS, JSON, assets)
COPY code_new/ /usr/share/nginx/html/

# Configuración personalizada de nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]

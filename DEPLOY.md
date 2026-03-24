# Despliegue AVSON con Docker

## Requisitos previos

```bash
# Instalar Docker
curl -fsSL https://get.docker.com | sh

# Instalar Docker Compose (si no viene incluido)
sudo apt install docker-compose-plugin

# Añadir tu usuario al grupo docker (para no usar sudo)
sudo usermod -aG docker $USER
# Cerrar sesión y volver a entrar para que aplique
```

## Configuración inicial

### 1. Clonar el repositorio

```bash
git clone https://github.com/arnau-avson/avson-web2.git
cd avson-web2
```

### 2. Crear el archivo de variables de entorno

```bash
nano code/server/.env
```

Contenido:

```
AZURE_TENANT_ID=tu_tenant_id
AZURE_CLIENT_ID=tu_client_id
AZURE_CLIENT_SECRET=tu_client_secret
MAIL_SENDER=support@avson.eu
MAIL_RECIPIENT=arnau@avson.eu
```

## Comandos Docker

### Construir y levantar

```bash
# Construir la imagen y levantar los contenedores
docker compose up -d --build
```

### Ver estado

```bash
# Ver contenedores corriendo
docker compose ps

# Ver logs en tiempo real
docker compose logs -f

# Ver logs solo del servicio avson
docker compose logs -f avson
```

### Parar

```bash
# Parar sin eliminar
docker compose stop

# Parar y eliminar contenedores
docker compose down
```

### Reiniciar

```bash
# Reiniciar el servicio
docker compose restart
```

### Actualizar (después de un git pull)

```bash
git pull
docker compose up -d --build
```

### Reconstruir desde cero (sin caché)

```bash
docker compose down
docker compose build --no-cache
docker compose up -d
```

### Limpiar imágenes antiguas

```bash
# Eliminar imágenes no usadas
docker image prune -f

# Limpieza completa (imágenes, volúmenes, caché)
docker system prune -a -f
```

## Puertos

| Servicio | Puerto | Dominio |
|----------|--------|---------|
| Frontend | 3000 | avson.eu |
| API Mail | 3011 | mail.avson.eu |

## Troubleshooting

```bash
# Ver si los puertos están ocupados
ss -tlnp | grep -E '3000|3011'

# Entrar al contenedor para debug
docker compose exec avson sh

# Ver consumo de recursos
docker stats
```

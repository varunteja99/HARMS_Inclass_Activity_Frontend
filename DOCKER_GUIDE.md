# Docker Setup Guide - HARMS Frontend

This guide explains how to run the HARMS frontend using Docker.

## Prerequisites

- Docker installed (version 20.10+)
- Docker Compose installed (version 2.0+)

## Quick Start

### Development Mode (Recommended)

Start the frontend development server with hot-reload:

```bash
docker-compose up frontend-dev
```

The app will be available at: **http://localhost:3000**

### Production Mode

Build and run the production-optimized version:

```bash
docker-compose --profile production up frontend-prod
```

The app will be available at: **http://localhost:80**

## Docker Commands

### Start the Development Server

```bash
# Start in foreground
docker-compose up frontend-dev

# Start in background (detached mode)
docker-compose up -d frontend-dev
```

### Stop the Server

```bash
# Stop containers
docker-compose down

# Stop and remove volumes
docker-compose down -v
```

### View Logs

```bash
# Follow logs
docker-compose logs -f frontend-dev

# View last 100 lines
docker-compose logs --tail=100 frontend-dev
```

### Rebuild After Changes

If you modify package.json or Dockerfile:

```bash
# Rebuild the image
docker-compose build frontend-dev

# Rebuild and start
docker-compose up --build frontend-dev
```

### Access Container Shell

```bash
docker exec -it harms-frontend-dev sh
```

## File Structure

```
.
├── Dockerfile              # Multi-stage Docker build configuration
├── docker-compose.yml      # Docker Compose service definitions
├── .dockerignore          # Files to exclude from Docker build
├── nginx.conf             # Nginx configuration for production
└── DOCKER_GUIDE.md        # This file
```

## How It Works

### Development Mode

- Uses Node 18 Alpine image
- Installs dependencies inside container
- Mounts source code as volumes for hot-reload
- Runs Vite dev server on port 3000
- Changes to `src/` are reflected immediately

### Production Mode

- **Build Stage**: Compiles React app with Vite
- **Production Stage**: Serves static files with Nginx
- Optimized bundle with gzip compression
- Handles React Router with proper fallback
- Proxies `/api/*` requests to backend (if configured)

## Connecting to Backend

### Option 1: Update Vite Config

Modify `vite.config.js` to point to backend:

```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://backend:8000',  // Docker service name
        changeOrigin: true,
      }
    }
  }
})
```

### Option 2: Use Docker Network

If backend is also running in Docker, ensure both services are on the same network:

```yaml
networks:
  harms-network:
    external: true  # Use existing backend network
```

Then start backend first:
```bash
cd /path/to/backend
docker-compose up -d
```

## Troubleshooting

### Port Already in Use

```bash
# Find process using port 3000
lsof -ti:3000 | xargs kill -9

# Or change port in docker-compose.yml
ports:
  - "3001:3000"
```

### Changes Not Reflecting

```bash
# Ensure volumes are mounted correctly
docker-compose down
docker-compose up --build frontend-dev
```

### Permission Errors

```bash
# Fix file permissions
sudo chown -R $USER:$USER .
```

### Container Won't Start

```bash
# Check logs
docker-compose logs frontend-dev

# Remove old containers and rebuild
docker-compose down -v
docker-compose build --no-cache frontend-dev
docker-compose up frontend-dev
```

### Backend API Not Accessible

- Ensure backend is running
- Check network configuration
- Verify proxy settings in `vite.config.js` or `nginx.conf`

## Best Practices

1. **Development**: Use `docker-compose up frontend-dev` for active development
2. **Testing**: Use production mode to test optimized build
3. **Cleanup**: Run `docker-compose down -v` to remove unused volumes
4. **Logs**: Monitor logs with `docker-compose logs -f` for debugging

## Environment Variables (Optional)

Create a `.env` file for environment-specific configs:

```env
VITE_API_URL=http://localhost:8000
VITE_APP_NAME=HARMS
```

Then modify docker-compose.yml:

```yaml
env_file:
  - .env
```

## Performance Tips

- Development mode uses hot-reload (slower but convenient)
- Production mode is optimized and cached (faster)
- Use `.dockerignore` to exclude unnecessary files
- Rebuild only when dependencies change

## Next Steps

1. Start backend: `cd ../HARMS_Inclass_Activity && docker-compose up`
2. Start frontend: `docker-compose up frontend-dev`
3. Access app: `http://localhost:3000`
4. Make changes and see them live!

## Resources

- [Docker Documentation](https://docs.docker.com/)
- [Vite Docker Guide](https://vitejs.dev/guide/static-deploy.html)
- [Nginx Configuration](https://nginx.org/en/docs/)

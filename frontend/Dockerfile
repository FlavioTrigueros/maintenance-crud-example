# Stage build
FROM node:18-alpine as build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --silent
COPY . .
RUN npm run build -- --configuration production

# Stage serve with httpd (Apache)
FROM httpd:2.4-alpine
COPY --from=build /app/dist/maintenance-frontend /usr/local/apache2/htdocs/
# Optional: expose port 80 (default)
EXPOSE 80

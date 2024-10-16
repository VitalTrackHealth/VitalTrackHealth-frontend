### BUILD STAGE ###############################################################

FROM node:18 AS builder

WORKDIR /app

RUN apt-get update && apt-get install --yes \
    curl \
    &&\
    # Clean unused apt packages, configurations, and cache
    apt-get purge --yes --auto-remove &&\
    apt-get clean &&\
    rm -rf /var/lib/apt/lists/*

COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Generate web app static files
RUN NODE_ENV="develop" npx expo export -p web

### RUN STAGE ##############################################################

FROM nginx:alpine

WORKDIR /usr/share/nginx/html/www

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist .

EXPOSE 80
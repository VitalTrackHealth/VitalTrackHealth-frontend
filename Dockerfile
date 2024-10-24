### BUILD STAGE ###############################################################

FROM node:18 AS builder

# !Remove
ENV EXPO_PUBLIC_API_URL=http://157.230.231.51:8000

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
RUN npm run build

### RUN STAGE ##############################################################

FROM nginx:alpine

WORKDIR /usr/share/nginx/html/www

COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist .

EXPOSE 80
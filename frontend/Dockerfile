###
# build environment
###
FROM node:10.13 as builder

# Prepare app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app/

# env variables
ARG REACT_APP_AUTH0_DOMAIN
ARG REACT_APP_AUTH0_AUDIENCE
ARG REACT_APP_AUTH0_CLIENT_ID
ARG REACT_APP_AUTH0_REDIRECT_URI

# Install dependencies
COPY . /usr/src/app/
RUN npm install --silent
RUN npm run build

###
# run environment
###
FROM nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

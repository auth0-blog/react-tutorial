# reference: https://nodejs.org/en/docs/guides/nodejs-docker-webapp/
FROM node:10.13

# Create app directory
WORKDIR /usr/src/app

# env variables
ARG AUTH0_DOMAIN
ARG AUTH0_API_IDENTIFIER

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 80
CMD [ "node", "src" ]

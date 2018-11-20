# React Tutorial

[Auth0] has developed this application to support [the React Tutorial published here](https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/). Head to the article to learn about how everything works.

## Running the Application

The easiest way to run this application is to issue `npm start` from a terminal pointing to this directory. This command, as you may know, requires Node.js and NPM installed locally. If you don't have those, [you can install them in a few minutes](https://nodejs.org/en/download/).

Another alternative is to use Docker to run the app in a container. To do so, you can issue the following commands:

```bash
docker build -t react-tutorial .

docker run --name react-tutorial -d -p 3000:80 react-tutorial
```

This will make your app accessible on the following URL: [`http://localhost:3000`].

## Releasing a new Docker Image

Make sure you are currently logged into Docker and then issue the following commands:

```bash
docker build -t brunokrebs/react-tutorial .

docker push brunokrebs/react-tutorial
```

In the code snippet above, you will need to replace `brunokrebs` with your own Docker username (unless you are me 😊).

If you do push a Docker image to [Docker Hub](https://hub.docker.com/), then you can use it like this:

```bash
docker run --name react-tutorial -d -p 3000:3000 brunokrebs/react-tutorial
```

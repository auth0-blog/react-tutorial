# React Tutorial

[Auth0] has developed this application to support [the React Tutorial published here](https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/). Head to the article to learn about how everything works.

## Running the Application

The easiest way to run this application is to issue `node src` from a terminal pointing to this directory. This command, as you may know, requires Node.js and NPM installed locally. If you don't have those, [you can install them in a few minutes](https://nodejs.org/en/download/).

Another alternative is to use Docker to run the app in a container. To do so, you can issue the following commands:

```bash
docker build -t react-tutorial-backend .

docker run --name react-tutorial-backend -d -p 8081:8081 react-tutorial-backend
```

This will make your API accessible on the following URL: [`http://localhost:8081`].

## Releasing a new Docker Image

Make sure you are currently logged into Docker and then issue the following commands:

```bash
docker build -t brunokrebs/react-tutorial-backend .

docker push brunokrebs/react-tutorial-backend
```

In the code snippet above, you will need to replace `brunokrebs` with your own Docker username (unless you are me 😊).

If you do push a Docker image to [Docker Hub](https://hub.docker.com/), then you can use it like this:

```bash
docker run --name react-tutorial-backend -d -p 8081:8081 brunokrebs/react-tutorial-backend
```

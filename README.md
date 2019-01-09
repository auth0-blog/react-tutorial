# React Tutorial: Building and Securing Your First App

In this article, you will learn the basic concepts of React while creating a simple Q&A (Questions & Answers) app that relies on a backend API built with Express. You can find the whole source code developed throughout the article in this GitHub repository.

Read more at:

[React Tutorial: Building and Securing Your First App](https://auth0.com/blog/react-tutorial-building-and-securing-your-first-app/)

## Running This Sample

To facilitate running this sample, I've left my own Auth0 configuration values in this repo. As such, you can simply run the following commands to run the sample application:

```bash
export REACT_APP_AUTH0_DOMAIN=bk-tmp.auth0.com
export REACT_APP_AUTH0_AUDIENCE=https://bk-tmp.auth0.com/userinfo
export REACT_APP_AUTH0_CLIENT_ID=PVafIu9Q5QN65DiPByAFvCCJryY7n432
export REACT_APP_AUTH0_REDIRECT_URI=http://localhost:3000/callback

export AUTH0_DOMAIN=$REACT_APP_AUTH0_DOMAIN
export AUTH0_API_IDENTIFIER=$REACT_APP_AUTH0_CLIENT_ID

npm start
```

The first four environment variables, `REACT_APP_AUTH0_*`, are used by the React application. The last two, `AUTH0_DOMAIN` and `AUTH0_API_IDENTIFIER`, are used by the backend API.

### Running with Docker

```bash
export REACT_APP_AUTH0_DOMAIN=bk-tmp.auth0.com
export REACT_APP_AUTH0_AUDIENCE=https://bk-tmp.auth0.com/userinfo
export REACT_APP_AUTH0_CLIENT_ID=PVafIu9Q5QN65DiPByAFvCCJryY7n432
export REACT_APP_AUTH0_REDIRECT_URI=http://localhost:3000/callback

npm run build

docker build \
  --build-arg AUTH0_DOMAIN=$REACT_APP_AUTH0_DOMAIN \
  --build-arg AUTH0_API_IDENTIFIER=$REACT_APP_AUTH0_CLIENT_ID \
  -t react-tutorial .
  
d rm -f react-tutorial

docker run --name react-tutorial -d -p 3000:3001 react-tutorial
```

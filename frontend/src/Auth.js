import createAuth0Client from '@auth0/auth0-spa-js';

let auth0;

async function initialize() {
  auth0 = await createAuth0Client({
    domain: 'rbac-and-groups.auth0.com',
    client_id: '37QIIN7b5vJCbvN65hz5WACofGxchInE',
    redirect_uri: 'http://localhost:3000/callback'
  });
}

async function getProfile() {
  return await auth0.getUser();
}

function getIdToken() {
  // todo
}

async function isAuthenticated() {
  return await auth0.isAuthenticated();
}

async function signIn() {
  await auth0.loginWithRedirect({
    connection: 'Username-Password-Authentication'
  });
}

async function handleAuthentication() {
  await auth0.handleRedirectCallback();
}

function signOut() {
  auth0.logout();
}

async function silentAuth() {
  await auth0.getTokenSilently();
}

export {
  initialize,
  getProfile,
  getIdToken,
  isAuthenticated,
  signIn,
  handleAuthentication,
  signOut,
  silentAuth,
};

import createAuth0Client from '@auth0/auth0-spa-js';

let auth0;

async function initialize() {
  auth0 = await createAuth0Client({
    domain: 'rbac-and-groups.auth0.com',
    client_id: '37QIIN7b5vJCbvN65hz5WACofGxchInE',
    redirect_uri: 'http://localhost:3000/callback'
  });
}

async function getExpensesAccessToken() {
  return await auth0.getTokenSilently({
    audience: 'https://expense-api.troubleshoo.com',
    scope: 'read:reports create:report ',
  });
}

async function getExpensesConsent() {
  return await auth0.getTokenWithPopup({
    audience: 'https://expense-api.troubleshoo.com',
    scope: 'read:reports create:report ',
  });
}

async function getInvoicesAccessToken() {
  return await auth0.getTokenSilently({
    audience: 'https://invoice-api.troubleshoo.com',
    scope: 'read:invoices create:invoice',
  });
}

async function getInvoicesConsent() {
  return await auth0.getTokenWithPopup({
    audience: 'https://invoice-api.troubleshoo.com',
    scope: 'read:invoices create:invoice',
  });
}

async function getProfile() {
  return await auth0.getUser();
}

async function getVacationsAccessToken() {
  return await auth0.getTokenSilently({
    audience: 'https://vacation-api.troubleshoo.com',
    scope: 'read:requests create:request',
  });
}

async function getVacationsConsent() {
  return await auth0.getTokenWithPopup({
    audience: 'https://vacation-api.troubleshoo.com',
    scope: 'read:requests create:request',
  });
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
  getExpensesAccessToken,
  getExpensesConsent,
  getInvoicesAccessToken,
  getInvoicesConsent,
  getProfile,
  getVacationsAccessToken,
  getVacationsConsent,
  isAuthenticated,
  signIn,
  handleAuthentication,
  signOut,
  silentAuth,
};

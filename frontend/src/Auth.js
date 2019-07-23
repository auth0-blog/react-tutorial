import createAuth0Client from '@auth0/auth0-spa-js';
import {
  getCallbackUrl,
  getClientId,
  getDomain,
  getConnection,
  getExpenseAPIAudience,
  getInvoiceAPIAudience,
  getVacationAPIAudience,
} from './Config';

let auth0;

async function initialize() {
  auth0 = await createAuth0Client({
    domain: getDomain(),
    client_id: getClientId(),
    redirect_uri: getCallbackUrl()
  });
}

async function getExpensesAccessToken() {
  return await auth0.getTokenSilently({
    audience: getExpenseAPIAudience(),
    scope: 'read:expenses create:expenses'
  });
}

async function getExpensesConsent() {
  return await auth0.getTokenWithPopup({
    audience: getExpenseAPIAudience(),
    scope: 'read:expenses create:expenses'
  });
}

async function getInvoicesAccessToken() {
  return await auth0.getTokenSilently({
    audience: getInvoiceAPIAudience(),
    scope: 'read:invoices create:invoices',
  });
}

async function getInvoicesConsent() {
  return await auth0.getTokenWithPopup({
    audience: getInvoiceAPIAudience(),
    scope: 'read:invoices create:invoices',
  });
}

async function getProfile() {
  return await auth0.getUser();
}

async function getVacationsAccessToken() {
  return await auth0.getTokenSilently({
    audience: getVacationAPIAudience(),
    scope: 'read:vacations create:vacations',
  });
}

async function getVacationsConsent() {
  return await auth0.getTokenWithPopup({
    audience: getVacationAPIAudience(),
    scope: 'read:vacations create:vacations',
  });
}

async function isAuthenticated() {
  return await auth0.isAuthenticated();
}

async function signIn() {
  await auth0.loginWithRedirect({
    connection: getConnection()
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

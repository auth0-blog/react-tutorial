function getDomain() {
  return localStorage.getItem('auth0-domain') || 'rbac-and-groups.auth0.com';
}

function getClientId() {
  return localStorage.getItem('auth0-client-id') || '37QIIN7b5vJCbvN65hz5WACofGxchInE';
}

function getCallbackUrl() {
  return localStorage.getItem('auth0-callback-url') || 'http://localhost:3000/callback';
}

function getExpenseAPIAudience() {
  return localStorage.getItem('auth0-expense-api-audience') || 'https://expense-api.troubleshoo.com';
}

function getInvoiceAPIAudience() {
  return localStorage.getItem('auth0-invoice-api-audience') || 'https://invoice-api.troubleshoo.com';
}

function getVacationAPIAudience() {
  return localStorage.getItem('auth0-vacation-api-audience') || 'https://vacation-api.troubleshoo.com';
}

function getConnection() {
  return localStorage.getItem('auth0-connection-name') || 'Username-Password-Authentication';
}

function getAPIUrl() {
  return localStorage.getItem('api-url') || 'http://localhost:3001';
}

function setDomain(newValue) {
  return localStorage.setItem('auth0-domain', newValue);
}

function setClientId(newValue) {
  return localStorage.setItem('auth0-client-id', newValue);
}

function setCallbackUrl(newValue) {
  return localStorage.setItem('auth0-callback-url', newValue);
}

function setExpenseAPIAudience(newValue) {
  return localStorage.setItem('auth0-expense-api-audience', newValue);
}

function setInvoiceAPIAudience(newValue) {
  return localStorage.setItem('auth0-invoice-api-audience', newValue);
}

function setVacationAPIAudience(newValue) {
  return localStorage.setItem('auth0-vacation-api-audience', newValue);
}

function setConnection(newValue) {
  return localStorage.setItem('auth0-connection-name', newValue);
}

function setAPIUrl(newValue) {
  return localStorage.setItem('api-url', newValue);
}

export {
  getDomain,
  getClientId,
  getCallbackUrl,
  getExpenseAPIAudience,
  getInvoiceAPIAudience,
  getVacationAPIAudience,
  getConnection,
  getAPIUrl,
  setDomain,
  setClientId,
  setCallbackUrl,
  setExpenseAPIAudience,
  setInvoiceAPIAudience,
  setVacationAPIAudience,
  setConnection,
  setAPIUrl,
}

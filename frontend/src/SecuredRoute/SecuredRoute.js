import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {isAuthenticated, signIn} from '../Auth';

function GatedComponent(props) {
  const [authenticated, setAuthenticated] = useState(null);

  const {component: Component, checkingSession} = props;

  useEffect(() => {
    async function checkAuthenticationStatus() {
      const isAuth = await isAuthenticated();
      if (!isAuth) await signIn();
      setAuthenticated(isAuth);
    }
    checkAuthenticationStatus();
  });

  if (checkingSession || !authenticated) return <h3 className="text-center">Validating session...</h3>;
  return <Component />
}

function SecuredRoute(props) {
  const {component, path} = props;
  return (
    <Route path={path} render={() => <GatedComponent component={component} />} />
  );
}

export default SecuredRoute;

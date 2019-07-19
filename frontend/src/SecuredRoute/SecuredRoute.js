import React, {useState, useEffect} from 'react';
import {Route} from 'react-router-dom';
import {isAuthenticated, signIn} from '../NewAuth';

function SecuredRoute(props) {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    async function checkAuthenticationStatus() {
      setAuthenticated(await isAuthenticated());
    }
    checkAuthenticationStatus();
  });

  const {component: Component, path, checkingSession} = props;
  return (
    <Route path={path} render={() => {
      if (checkingSession) return <h3 className="text-center">Validating session...</h3>;
      if (!authenticated) {
        signIn();
        return <div></div>;
      }
      return <Component />
    }} />
  );
}

export default SecuredRoute;

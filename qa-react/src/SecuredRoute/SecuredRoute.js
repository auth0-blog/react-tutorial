import React from 'react';
import {Route} from 'react-router-dom';
import auth0Client from '../Auth';

function SecuredRoute(props) {
  const {component: Component, path} = props;
  return (
    <Route path={path} render={() => {
      if (!auth0Client.isAuthenticated()) return auth0Client.signIn();
      return <Component />
    }} />
  );
}

export default SecuredRoute;

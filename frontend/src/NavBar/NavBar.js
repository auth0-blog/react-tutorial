import React, { useState, useEffect } from 'react';
import {Link, withRouter} from 'react-router-dom';
import {getProfile, isAuthenticated, signIn, signOut} from '../Auth';

function NavBar() {
  const [profile, setProfile] = useState(null);
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    async function loadProfile() {
      setProfile(await getProfile());
      setAuthenticated(await isAuthenticated());
    }
    loadProfile();
  });

  return (
    <nav className="navbar navbar-dark bg-primary fixed-top">
      <Link className="navbar-brand" to="/">
        Q&App
      </Link>
      {
        !authenticated && <button className="btn btn-dark" onClick={async () => {await signIn()}}>Sign In</button>
      }
      {
        authenticated && <div>
          <label className="mr-2 text-white">{profile.name}</label>
          <button className="btn btn-dark" onClick={signOut}>Sign Out</button>
        </div>
      }
    </nav>
  );
}

export default withRouter(NavBar);

import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { BASENAME } from '..';

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button
      onClick={() =>
        logout({ returnTo: `${window.location.origin}${BASENAME}` })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;

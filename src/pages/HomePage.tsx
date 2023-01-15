import React from 'react';
import { PageLayout } from '../components/PageLayout';
import LoginButton from '../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/LogoutButton';
import { Link } from 'react-router-dom';

export const HomePage = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <PageLayout>
      <h1>Ambulance Handover</h1>
      {!isAuthenticated && !isLoading && (
        <>
          <LoginButton />
        </>
      )}
      {isAuthenticated && !isLoading && (
        <>
          <ul>
            <li>
              <Link to="/profile">User Profile</Link>
            </li>
            <li>
              <Link to="/hospitals">Hospitals</Link>
            </li>
          </ul>
          <LogoutButton />
        </>
      )}
    </PageLayout>
  );
};

import React from 'react';
import { PageLayout } from '../components/PageLayout';
import LoginButton from '../components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';
import LogoutButton from '../components/LogoutButton';

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
              <a href="/profile">User Profile</a>
            </li>
            <li>
              <a href="/hospitals">Hospitals</a>
            </li>
          </ul>
          <LogoutButton />
        </>
      )}
    </PageLayout>
  );
};

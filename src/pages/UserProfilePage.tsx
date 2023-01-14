import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { PageLayout } from '../components/PageLayout';

export const UserProfilePage = () => {
  const { user } = useAuth0();
  return (
    <PageLayout>
      <h1>User Profile</h1>
      <div>
        <img src={user?.picture} alt={user?.name} />
        <h2>{user?.name}</h2>
        <p>{user?.email}</p>
      </div>
    </PageLayout>
  );
};

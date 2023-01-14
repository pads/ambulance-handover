import { withAuthenticationRequired } from '@auth0/auth0-react';
import React from 'react';
import { PageLayout } from './PageLayout';
import { PageLoader } from './PageLoader';

export const AuthenticationGuard: React.FC<{
  component: React.ComponentType;
}> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <PageLayout>
        <PageLoader />
        <></>
      </PageLayout>
    ),
  });

  return <Component />;
};

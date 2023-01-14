import React from 'react';

export const PageLayout: React.FC<{ children: React.ReactNode[] }> = ({
  children,
}) => {
  return (
    <main className="container-fluid">
      <div className="App-header">{children}</div>
    </main>
  );
};

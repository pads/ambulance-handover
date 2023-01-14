import React from 'react';
import logo from '../logo.svg';

export const PageLoader = () => {
  return (
    <div className="loader">
      <img src={logo} className="App-logo" alt="Loading..." />
    </div>
  );
};

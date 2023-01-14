import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { AuthenticationGuard } from './components/AuthenticationGuard';
import { HomePage } from './pages/HomePage';
import { HospitalsPage } from './pages/HospitalsPage';
import { UserProfilePage } from './pages/UserProfilePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/hospitals"
        element={<AuthenticationGuard component={HospitalsPage} />}
      />
      <Route
        path="/profile"
        element={<AuthenticationGuard component={UserProfilePage} />}
      />
    </Routes>
  );
}

export default App;

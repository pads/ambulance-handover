import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <main className="container-fluid">
      <header className="App-header">
        <h1>Ambulance Handover</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <UserProfile />
      </header>
    </main>
  );
}

export default App;

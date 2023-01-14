import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('Ambulance Handover App', () => {
  it('renders the home page on load', () => {
    render(<App />, { wrapper: BrowserRouter });
    const appName = screen.getByText(/Ambulance Handover/i);
    expect(appName).toBeInTheDocument();
  });
});

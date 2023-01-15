import React from 'react';
import { render, screen } from '@testing-library/react';
import { Hospital, HospitalsPage } from './HospitalsPage';
import { apiService } from '../services/apiService';

jest.mock('../services/apiService');

describe('Hospitals Page', () => {
  const mockedApiService = apiService as jest.MockedFunction<typeof apiService>;

  it('should render a list of hospitals given a successful API response', async () => {
    const data: Hospital[] = [
      {
        id: 1,
        name: 'Hospital 1',
      },
      {
        id: 2,
        name: 'Hospital 2',
      },
    ];

    mockedApiService.mockResolvedValue({ data });

    render(<HospitalsPage />);
    const listItems = await screen.findAllByRole('listitem');
    expect(listItems.length).toBe(2);
    expect(listItems[0].textContent).toBe('Hospital 1');
    expect(listItems[1].textContent).toBe('Hospital 2');

    const errorMessage = screen.queryByTestId('error-message');
    expect(errorMessage).not.toBeInTheDocument();
  });

  it('should render an error given an unsuccessful API response', async () => {
    mockedApiService.mockResolvedValue({
      error: new Error('Internal Server Error'),
    });

    render(<HospitalsPage />);
    const errorMessage = await screen.findByTestId('error-message');
    expect(errorMessage.textContent).toBe('Internal Server Error');
  });
});

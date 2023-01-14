import { apiService } from './apiService';
import fetchMock from 'jest-fetch-mock';

describe('API Service', () => {
  const fakePayload = [
    {
      id: 1,
      name: 'Test Hospital',
    },
  ];

  it('should correctly fetch from the API', async () => {
    fetchMock.mockOnce(JSON.stringify(fakePayload));

    const { data } = await apiService('hospitals');

    expect(data).toEqual(fakePayload);
  });

  it('should not return an error for a successful response', async () => {
    fetchMock.mockOnce(JSON.stringify(fakePayload));

    const { error } = await apiService('hospitals');

    expect(error).toBeUndefined();
  });

  it('should return an error for an unsuccessful response', async () => {
    fetchMock.mockRejectOnce(new Error('Internal Server Error'));

    const { error } = await apiService('hospitals');

    expect(error.message).toBe('Internal Server Error');
  });
});

import React, { useEffect, useState } from 'react';
import { PageLayout } from '../components/PageLayout';
import { apiService } from '../services/apiService';

export interface Hospital {
  id: number;
  name: string;
}

export const HospitalsPage = () => {
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const fetchHospitals = async () => {
      const { data, error } = await apiService<Hospital[]>('hospitals');
      if (data) {
        setHospitals(data);
      }
      if (error) {
        setError(error.message);
      }
    };

    fetchHospitals();
  }, []);

  const hospitalListItems = hospitals.map((hospital) => (
    <li key={hospital.id}>{hospital.name}</li>
  ));

  return (
    <PageLayout>
      <h1>Hospitals</h1>
      {!error && <ul>{hospitalListItems}</ul>}
      {error && <p data-testid="error-message">{error}</p>}
    </PageLayout>
  );
};

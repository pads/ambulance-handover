import React, { useEffect, useState } from 'react';
import { PageLayout } from '../components/PageLayout';

interface Hospital {
  id: number;
  name: string;
}

export const HospitalsPage = () => {
  const [hospitals, setHospitals] = useState([]);

  useEffect(() => {
    const fetchHospitals = async () => {
      const response = await fetch('http://localhost:3001/api/hospitals');
      const hospitals = await response.json();
      setHospitals(hospitals);
    };

    fetchHospitals();
  });

  const hospitalListItems = hospitals.map((hospital: Hospital) => (
    <li key={hospital.id}>{hospital.name}</li>
  ));

  return (
    <PageLayout>
      <h1>Hospitals</h1>
      <ul>{hospitalListItems}</ul>
    </PageLayout>
  );
};

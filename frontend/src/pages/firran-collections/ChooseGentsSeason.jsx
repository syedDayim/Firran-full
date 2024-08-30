import React from 'react';
import SeasonCard from '../../components/SeasonCard';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function ChooseLadiesSeason() {
  const seasons = ['Summer', 'Winter', 'Autumn', 'Spring'];

  return (
    <>
    <Header/>
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {seasons.map((season, index) => (
          <li key={index} style={{ marginBottom: '5px' }}>
          <SeasonCard season={season} baseUrl="/gents" />
        </li>
      ))}
    </ul>
    <Footer/>
    </>
  );
}

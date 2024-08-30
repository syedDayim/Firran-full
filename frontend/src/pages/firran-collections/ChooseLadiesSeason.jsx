import React from 'react';
import { Link } from 'react-router-dom';

export default function ChooseLadiesSeason() {
  const seasons = ['Summer', 'Winter', 'Autumn', 'Rainy'];

  return (
    <ul>
      {seasons.map((season, index) => (
        <li key={index}>
          <Link to={`/ladies?season=${season.toLowerCase()}`}>{season}</Link>
        </li>
      ))}
    </ul>
  );
}

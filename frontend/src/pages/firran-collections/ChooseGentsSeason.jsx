import React from 'react';
import { Link } from 'react-router-dom';

export default function ChooseGentsSeason() {
  const seasons = ['Summer', 'Winter', 'Autumn', 'Rainy'];

  return (
    <ul>
      {seasons.map((season, index) => (
        <li key={index}>
          <Link to={`/gents?season=${season.toLowerCase()}`}>{season}</Link>
        </li>
      ))}
    </ul>
  );
}

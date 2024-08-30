import React from 'react';
import { Link } from 'react-router-dom';
import summer from '/assets/summer.jpg';
import winter from '/assets/winter.jpg';
import autumn from '/assets/autumn.jpg';
import spring from '/assets/spring.jpg';

export default function SeasonCard({ season, baseUrl }) {
  const seasonImages = {
    summer: summer,
    winter: winter,
    autumn: autumn,
    spring: spring,
  };

  const cardContainerStyle = {
    overflow: 'hidden',
    position: 'relative',
    height: '20vh',
    width: '100%',
  };

  const cardStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    backgroundImage: `url(${seasonImages[season.toLowerCase()]})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    transition: 'transform 0.5s ease',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: '2rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    textDecoration: 'none',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  };

  const textStyle = {
    position: 'relative',
    zIndex: 2,
  };

  return (
    <div style={cardContainerStyle}>
      <Link
        to={`${baseUrl}?season=${season.toLowerCase()}`}
        style={cardStyle}
        onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <div style={overlayStyle}></div>
        <div style={textStyle}>{season}</div>
      </Link>
    </div>
  );
}

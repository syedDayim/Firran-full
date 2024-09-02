import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import '../../styles/chooseSeason.css';  // Import the CSS file

export default function ChooseLadiesSeason() {
  // State to store the fetched data
  const [gentsCollection, setGentsCollection] = useState([]);

  // Fetch data from the API when the component mounts
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/ladies/')
      .then(response => response.json())
      .then(data => {
        // Update the state with the fetched data
        setGentsCollection(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="content-container"> {/* New container div with padding */}
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {gentsCollection.map((season, index) => (
            <li key={index} style={{ marginBottom: '15px' }}>
              <div className="card-container">
                <a
                  href={`/ladies?season=${season.name.toLowerCase()}`}
                  className="card"
                  style={{ backgroundImage: `url(${season.image})` }}
                >
                  <div className="card-overlay"></div>
                  <div className="card-text">{season.name}</div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
    </>
  );
}

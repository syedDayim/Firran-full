import React from 'react';
import '../styles/noProduct.css'; // Import the CSS file for styling

export default function NoProduct() {
  return (
    <div className="no-product-container">
      <img 
        src="https://via.placeholder.com/600x400?text=No+Products+Available" 
        alt="No Products Available" 
        className="no-product-image" 
      />
      {/* <p className="no-product-text">No products available</p> */}
    </div>
  );
}

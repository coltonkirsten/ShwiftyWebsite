// File: src/Components/CarDetails.js

import React, { useState } from 'react';

function CarDetails({ car, onClose }) {
  const [make, setMake] = useState(car.make);
  const [model, setModel] = useState(car.model);
  const [year, setYear] = useState(car.year);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="car-details">
      <button className="close-button" onClick={onClose}>X</button>
      <h3 className="car-name">{car.name}</h3>
      <img src={car.image} alt={car.name} className="car-image" />
      <p className="car-details-text">{car.details}</p>
      <form onSubmit={handleSubmit} className="car-details-form">
        <label className="car-details-label">
          Make:
          <input
            type="text"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            className="input"
          />
        </label>
        <label className="car-details-label">
          Model:
          <input
            type="text"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            className="input"
          />
        </label>
        <label className="car-details-label">
          Year:
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="input"
          />
        </label>
        <button type="submit" className="button car-details-save-button">Save</button>
      </form>
      <button className="button book-service-button">Book Service</button>
    </div>
  );
}

export default CarDetails;


import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import logo from '../loglogo.png';
import CarDetails from './CarDetails';

const cars = [
  { id: 1, name: 'Car 1', details: 'Details of Car 1', image: 'url_to_car1_image', make: 'Make 1', model: 'Model 1', year: 'Year 1' },
  { id: 2, name: 'Car 2', details: 'Details of Car 2', image: 'url_to_car2_image', make: 'Make 2', model: 'Model 2', year: 'Year 2' },
  { id: 3, name: 'Car 3', details: 'Details of Car 3', image: 'url_to_car3_image', make: 'Make 3', model: 'Model 3', year: 'Year 3' },
];

function Garage() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCarIndex, setSelectedCarIndex] = useState(0); // Add state for selected car index

  const handleCarSelect = (index) => {
    setSelectedCar(cars[index]);
    setSelectedCarIndex(index); // Update selected car index
  };

  const handleClose = () => {
    setSelectedCar(null);
  };

  return (
    <div>
      <h2>Garage</h2>
      <p>Welcome to our Garage page!</p>
      {selectedCar ? (
        <CarDetails car={selectedCar} onClose={handleClose} />
      ) : (
        <div className="car-selector" style={{ backgroundColor: '#B9D6F2', padding: '20px', borderRadius: '10px' }}>
          <Carousel selectedItem={selectedCarIndex} onClickItem={handleCarSelect} showThumbs={false}>
            {cars.map((car, index) => (
              <div key={car.id} onClick={() => handleCarSelect(index)}>
                <img src={logo} alt={car.name} />
                <p className="legend">{car.name}</p>
              </div>
            ))}
          </Carousel>
        </div>
      )}
    </div>
  );
}

export default Garage;




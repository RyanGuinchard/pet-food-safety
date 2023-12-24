// FoodInput.jsx
import React, { useState } from 'react';
import FoodDisplay from './FoodDisplay';

const FoodInput = ({ selectedPetId }) => {
  const [foodInput, setFoodInput] = useState('');

  const handleFoodInputChange = (e) => {
    setFoodInput(e.target.value);
  };

  return (
    <>
      <label htmlFor="FoodInput">Enter a food:</label>
      <input type="text" id="FoodInput" value={foodInput} onChange={handleFoodInputChange} />
      <FoodDisplay selectedPetId={selectedPetId} foodInput={foodInput} />
    </>
  );
};

export default FoodInput;

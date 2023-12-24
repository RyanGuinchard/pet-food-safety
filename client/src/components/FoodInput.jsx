// FoodInput.jsx
import React, { useState } from 'react';
import FoodDisplay from './FoodDisplay';

// Functional component for handling food input
const FoodInput = ({ selectedPetId }) => {
  // State hook for tracking food input
  const [foodInput, setFoodInput] = useState('');

  // Update foodInput based on user input
  const handleFoodInputChange = (e) => {
    setFoodInput(e.target.value);
  };

  // JSX rendering of the FoodInput component
  return (
    <>
      {/* Label and input for entering food */}
      <label htmlFor="FoodInput">Enter a food:</label>
      <input type="text" id="FoodInput" value={foodInput} onChange={handleFoodInputChange} />
      {/* Display component for showing related information */}
      <FoodDisplay selectedPetId={selectedPetId} foodInput={foodInput} />
    </>
  );
};

// Export the FoodInput component as the default export
export default FoodInput;

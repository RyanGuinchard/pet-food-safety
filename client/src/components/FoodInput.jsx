import React, { useState } from 'react';
import FoodDisplay from './FoodDisplay';
import Pets from '../data/pets.json';

// Component for handling food input and displaying suggestions
const FoodInput = ({ selectedPetId, darkMode }) => {
  // State hooks for managing food input and suggestions
  const [foodInput, setFoodInput] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const maxSuggestions = 5;

  // Function to handle food input change
  const handleFoodInputChange = (e) => {
    const inputValue = e.target.value;
    setFoodInput(inputValue);

    // Clear suggestions if input is empty
    if (inputValue.trim() === '') {
      setSuggestions([]);
      return;
    }

    // Get all foods from pets data
    const allFoods = Pets.pets.flatMap(pet => [...(pet.safeFoods || []), ...(pet.unsafeFoods || [])]);
    // Filter matching foods based on input
    const matchingFoods = allFoods.filter(food =>
      food.toLowerCase().includes(inputValue.toLowerCase())
    );

    // Check if any exact match is found, hide suggestions if true
    const isExactMatch = matchingFoods.some(food => food.toLowerCase() === inputValue.toLowerCase());
    if (isExactMatch) {
      setSuggestions([]);
      return;
    }

    // Set suggestions based on matching foods
    const uniqueSuggestions = [...new Set(matchingFoods)];
    setSuggestions(uniqueSuggestions.slice(0, maxSuggestions));
  };

  // Function to handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setFoodInput(suggestion);
    setSuggestions([]);
  };

  // JSX rendering of the FoodInput component
  return (
    <>
      {/* Label and input for entering food */}
      <label htmlFor="FoodInput">Enter a food:</label>
      <input type="text" id="FoodInput" value={foodInput} onChange={handleFoodInputChange} />
      {/* Display suggestions if input is not empty and suggestions exist */}
      {foodInput.trim() !== '' && suggestions.length > 0 && (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      {/* Display food safety information */}
      <FoodDisplay selectedPetId={selectedPetId} foodInput={foodInput} darkMode={darkMode} />
    </>
  );
};

export default FoodInput;

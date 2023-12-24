// FoodDisplay.jsx
import React from 'react';
import Pets from '../data/pets.json';

// Component for displaying information about pet food safety
const FoodDisplay = ({ selectedPetId, foodInput }) => {
  // Find the selected pet based on ID
  const selectedPet = Pets.pets.find((pet) => pet.id === parseInt(selectedPetId, 10));

  // Check for valid selected pet and food input
  if (!selectedPet || !foodInput) {
    return null;
  }

  // Convert safe and unsafe foods to lowercase for case-insensitive comparison
  const safeFoods = (selectedPet.safeFoods || []).map((food) => food.toLowerCase());
  const unsafeFoods = (selectedPet.unsafeFoods || []).map((food) => food.toLowerCase());
  const lowercaseInput = foodInput.toLowerCase();

  // Determine and display the result based on food safety
  let result = '';
  if (safeFoods.includes(lowercaseInput)) {
    result = `${foodInput} is safe for ${selectedPet.name}s.`;
  } else if (unsafeFoods.includes(lowercaseInput)) {
    result = `${foodInput} is not safe for ${selectedPet.name}s.`;
  } else {
    result = `No information available for ${foodInput}.`;
  }

  // JSX rendering of the FoodDisplay component
  return <p>{result}</p>;
};

// Export the FoodDisplay component as the default export
export default FoodDisplay;

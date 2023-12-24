// FoodDisplay.jsx
import React from 'react';
import Pets from '../data/pets.json';

const FoodDisplay = ({ selectedPetId, foodInput }) => {
  const selectedPet = Pets.pets.find((pet) => pet.id === parseInt(selectedPetId, 10));

  if (!selectedPet || !foodInput) {
    return null;
  }

  const safeFoods = (selectedPet.safeFoods || []).map((food) => food.toLowerCase());
  const unsafeFoods = (selectedPet.unsafeFoods || []).map((food) => food.toLowerCase());
  const lowercaseInput = foodInput.toLowerCase();

  let result = '';

  if (safeFoods.includes(lowercaseInput)) {
    result = `${foodInput} is safe for ${selectedPet.name}s.`;
  } else if (unsafeFoods.includes(lowercaseInput)) {
    result = `${foodInput} is not safe for ${selectedPet.name}s.`;
  } else {
    result = `No information available for ${foodInput}.`;
  }

  return <p>{result}</p>;
};

export default FoodDisplay;

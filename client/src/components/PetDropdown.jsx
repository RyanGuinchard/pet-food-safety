// Import necessary dependencies and styles
import "../App.css";
import { useState, useEffect } from 'react';
import Pets from "../data/pets.json";
import FoodInput from './FoodInput';
import FoodDisplay from './FoodDisplay';

// PetDropdown component for selecting a pet and displaying related information
const PetDropdown = ({ darkMode }) => {
  // State hooks for selected pet ID, pet names, and selected pet name
  const [selectedPetId, setSelectedPetId] = useState('');
  const [petNames, setPetNames] = useState([]);
  const [selectedPetName, setSelectedPetName] = useState('');

// eslint-disable-next-line no-unused-vars
const _ = selectedPetName;



  // Initialize pet names when the component mounts
  useEffect(() => {
    setPetNames(Pets.pets);
  }, []);

  // Update selected pet name when selectedPetId or petNames change
  useEffect(() => {
    const selectedPet = petNames.find((pet) => pet.id === parseInt(selectedPetId, 10));
    setSelectedPetName(selectedPet ? selectedPet.name : '');
  }, [selectedPetId, petNames]);

  // JSX rendering of the PetDropdown component
  return (
    <>
      {/* Label and dropdown for selecting a pet */}
      <label htmlFor="Pet Name">Select a Pet:</label>
      <select value={selectedPetId} onChange={(e) => setSelectedPetId(e.target.value)}>
        <option value="">Select a pet</option>
        {/* Generate dropdown options based on petNames */}
        {petNames.map((pet) => (
          <option key={pet.id} value={pet.id}>
            {pet.name}
          </option>
        ))}
      </select>
      {/* Components for handling food input and display */}
      <FoodInput selectedPetId={selectedPetId} darkMode={darkMode} />
      <FoodDisplay selectedPetId={selectedPetId} darkMode={darkMode} />
    </>
  );
};

// Export the PetDropdown component as the default export
export default PetDropdown;

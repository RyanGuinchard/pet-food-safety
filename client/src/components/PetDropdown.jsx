// Import necessary dependencies and styles
import "../App.css";
import { useState, useEffect } from 'react';
import Pets from "../data/pets.json";

// Define the PetDropdown functional component
const PetDropdown = () => {
  // State hooks to manage selected pet ID, pet names, and selected pet name
  const [selectedPetId, setSelectedPetId] = useState('');
  const [petNames, setPetNames] = useState([]);
  const [selectedPetName, setSelectedPetName] = useState('');

  // useEffect to initialize pet names when the component mounts
  useEffect(() => {
    // Set pet names from imported data
    setPetNames(Pets.pets);
  }, []);

  // useEffect to update selected pet name when selectedPetId or petNames change
  useEffect(() => {
    // Find selected pet name based on ID
    const selectedPet = petNames.find((pet) => pet.id === parseInt(selectedPetId, 10));
    // Update selectedPetName with the found pet's name or an empty string if not found
    setSelectedPetName(selectedPet ? selectedPet.name : '');
  }, [selectedPetId, petNames]);

  // JSX rendering of the PetDropdown component
  return (
    <>
      {/* Label for the dropdown */}
      <label htmlFor="Pet Name">Select a Pet:</label>
      {/* Dropdown to select a pet */}
      <select value={selectedPetId} onChange={(e) => setSelectedPetId(e.target.value)}>
        <option value="">Select a pet</option>
        {/* Map through petNames to generate dropdown options */}
        {petNames.map((pet) => (
          <option key={pet.id} value={pet.id}>
            {pet.name}
          </option>
        ))}
      </select>
      {/* Display the selected pet's name */}
      <p>Selected Pet: {selectedPetName}</p>
    </>
  );
};

// Export the PetDropdown component as the default export
export default PetDropdown;

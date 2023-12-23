import React, { useState, useEffect } from 'react';

function PetList() {
  const [pets, setPets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([];)

  useEffect(() => {
    // Fetch the data when the component mounts
    fetch('/api/pets')
      .then(response => response.json())
      .then(data => setPets(data));
  }, []);



  return (
    <div>
      <h1>What Can My Pet Have?</h1>
      <ul>
        {pets.map(pet => (
          <li>{pet.name}  -  {pet.foods[0]}</li>
        ))}
      </ul>
    </div>
  );
}

export default PetList;

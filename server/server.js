const express = require('express');
const app = express();
const port = 5000; 

const fs = require('fs');
const petFoodData = require('./data/petFoodData.json');

app.get('/api/pets', (req, res) => {
    try {
      const data = require('./data/petFoodData.json');
      res.json(data.pets);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

  app.get('/api/search', (req, res) => {
    const query = req.query.q; // Get the search query from the request query parameter
  
    // Filter the data based on the search query
    const results = petFoodData.pets.filter(pet => pet.name.toLowerCase().includes(query.toLowerCase()));
  
    res.json(results);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

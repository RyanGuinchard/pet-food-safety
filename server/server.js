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
  

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

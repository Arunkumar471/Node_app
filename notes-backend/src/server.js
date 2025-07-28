const express = require('express');
const mongoose = require('mongoose');
const app = express(); 
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ message: 'Welcome!,Hello from Notes Backend!'});
});

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Notes Server is running on ${port}`);
});
}).catch(err => {
  console.error('MongoDB connection error:', err);
});

app.get('/ak', (req, res) => {
  res.json({ message: 'Welcome' });
});

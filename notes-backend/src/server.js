const express = require('express');
const mongose = require('mongoose');
const port = process.env.PORT;
const app = express(); 


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notes Backend!'});
});

mongose
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
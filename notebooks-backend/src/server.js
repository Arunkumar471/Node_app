const express = require('express');
const app = express(); 
const port = process.env.PORT;
const mongose = require('mongoose');


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notebook Backend!'});
});

mongose.connect(process.env.DB_URL).then(() => {
 
    console.log('Connected to MongoDB');

  app.listen(port, () => {
  console.log(`Notebooks Server is running on ${port}`);

});
}).catch(err => {
  console.error('MongoDB connection error:', err);
});



app.get('/ak', (req, res) => {
  res.json({ message: 'Welcome' });
});
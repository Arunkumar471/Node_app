const express = require('express');
const app = express();  
const port = process.env.PORT || 3001;


app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Notebook!' });
});
app.listen(port, () => {
  console.log('Server is running on port 3001');
});
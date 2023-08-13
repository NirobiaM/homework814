const express = require('express');
const app = express();
const port = 5000; 

// Greeting route
app.get('/greeting', (req, res) => {
  res.send('Hello, stranger');
});

// Greeting with name 
app.get('/greeting/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Wow! Hello there, ${name}!`);
});


app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
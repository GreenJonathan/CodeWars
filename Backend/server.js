const express = require('express');
const app = express();

// Existing /ping route
app.get('/ping', (req, res) => {
  res.send('pong');
});

// New route for '/'
app.get('/', (req, res) => {
  res.send('Welcome to the CodeWars backend!');
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});

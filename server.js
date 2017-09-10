const express = require('express');

const app = express();

app.get('/', (req, res) => {
  // res.send('<h1>crazed fucked up daily life</h1>');
  res.send({
    name: 'Andrew',
    likes: [
      'Biking',
      'Cities',
    ],
  });
});

app.get('/about', (req, res) => {
  res.send('About page');
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'fucked up',
  });
});

app.listen(3000);

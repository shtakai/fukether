const express = require('express');
const hbs = require('hbs');

const app = express();
const path = require('path');

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req, res) => {
  // res.send('<h1>crazed fucked up daily life</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    welcomeMessage: 'Welcome to my website',
    currentYear: new Date().getFullYear(),
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    currentYear: new Date().getFullYear(),
  });
});

// /bad - send back json with errorMessage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'fucked up',
  });
});

app.listen(3000, () => {
  console.log('server is up on port 3000');
});

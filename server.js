'use strict'

require('dotenv').config();

const express = require('express');

const app = express();
//tells the computer to look in .env for "PORT" and assigns it to the const "PORT"
const PORT = process.env.PORT

app.use(express.static('./public'));
// whenever we get a path that ends in /hello we're gonna send a response.
app.get('/',(request,response)=> response.send('index'));

app.get('/hello', (request, response) => {
  response.status(200).send('<h1>HAY GURL</h1?')
});

app.get('/data', (request, response) => {
  let airplane = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well trained'
  }

  response.status(200).json(airplane);
});

app.use('*',(request,response) => response.send('Sorry, that route does not exist'));

app.listen(PORT, ()=> console.log(`My FIRST Server is listening on PORT ${PORT} AINT THAT NEAT?!?`));

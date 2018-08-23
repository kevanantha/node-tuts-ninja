// console.log('Hello world');

// == GLOBAL OBJECT ==
// setTimeout(() => {
  // console.log('3 secs have passed');
// }, 3000);

// let time = 0
// let timer = setInterval(() => {
//   time += 1;
//   console.log(`${time} seconds have passed`);
//   if (time >= 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// console.log(__dirname);
// console.log(__filename);


// == FUNCTION EXPRESSIONS ==
// normal function
// function sayHello() {
//   console.log('hello');
// }
// sayHello();

// function expressions
// const sayHi = () => {
//   console.log('hi');
// };
// sayHi();

// menge-pass function
// function callFunction(fun) {
//   fun();
// }
// callFunction(sayHello);
// callFunction(sayHi);

// == MODULE AND REQUIRE() ==
// const counter = require('./count');
// console.log(counter(['John', 'Doe']));

// == MODULE PATTERN ==
// const stuff = require('./stuff');
// console.log(stuff.array(['John', 'Doe']));
// console.log(stuff.adder(5, 8));
// console.log(stuff.adder(stuff.pi, 37));

// == CREATING A SERVER ==
// const http = require('http');

// const server = http.createServer((req, res) => {
//   console.log(`request was made: ${req.url}`);
//   res.writeHead(200, {'Context-Type': 'text/plain'});
//   res.end('Hello world');
// });

// server.listen(3000, () => {
//   console.log('server run in port 3000');
// });

// ==============

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    qs: req.query
  });
});

app.post('/contact', urlencodedParser, (req, res) => {
  console.log(req.body);
  res.render('contact-success', {
    data: req.body
  });
});

app.get('/profile/:name', (req, res) => {
  let data = {
    age: 21,
    job: 'Software Engineer',
    hobbies: [
      'Reading',
      'Fighting',
      'Gaming'
    ]
  };
  res.render('profile', {
    person: req.params.name,
    data: data
  });
});

app.listen(3000, () => {
  console.log('Server run in port http://localhost:3000');
});

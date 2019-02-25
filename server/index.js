const express = require('express');
const jwt = require('jsonwebtoken');
const consola = require('consola');
const {Nuxt, Builder} = require('nuxt');
const app = express();
const bodyParser = require('body-parser');
const host = process.env.HOST || '127.0.0.1';
const port = process.env.PORT || 8080;
const session = require('express-session');

// init session
app.use(session({
  secret: 'PFYTE*^Hh*&%7RE6w7n&^RGF&^FT867erg57(',
  resave: false,
  saveUninitialized: false,
  cookie: {secure: false, expires: new Date(Date.now() + 60 * 60 * 1000)}
}));

app.use(bodyParser.json());

app.set('port', port);

app.get('/api', (req, res) => {
  req.session.token = 'token';
  res.json({
    message: 'welcome api',
    session: req.session
  })

});
app.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    console.log('authData', authData);
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        message: 'post created...',
        authData
      })
    }
  })
});

//default users
const users = [
  {
    id: 1,
    name: 'Alex',
    email: 'asd@asd.com',
    pass: 'pass'
  }
];

app.post('/api/sign-up', (req, res) => {
  if(req.body.email){
    users.push(req.body);
    console.log(users);
    res.json({
      user: true
    })
  }
});
app.post('/api/sign-in', (req, res) => {

  let count = null;
  for(let i=0; i< users.length; i++){
    if(users[i].email == req.body.email && users[i].pass == req.body.pass){
      count = i;
    }
  }
  console.log('users[count]', users[count]);
  if (
      req.body.name == users[count].name
      && req.body.email == users[count].email
      && req.body.pass == users[count].pass
  ) {
    jwt.sign({user: users[count]}, 'secretkey', (err, token) => {
      req.session.token = token;
      if (err) {
        res.sendStatus(403)
      } else {
        res.json({
          token: req.session.token
        })
      }
      //console.log(req.session);
    })
  } else {
    res.json({
      error: 'undefined',
      //req: req.body.name
    })
  }

});

app.get('/api/logout', (req, res) => {
  req.session.destroy();
})

// verify token
function verifyToken(req, res, next) {
  // get auth header value
  const bearerHeader = req.headers['authorization'];
  // check if bearer is undefined

  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(' ');
    console.log('bearer', bearer);
    const bearerToken = bearer[1];
    console.log('bearerToken', bearerToken);
    req.token = bearerToken;

    next();
  } else {
    res.sendStatus(403)
  }

}

// Import and Set Nuxt.js options
let config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }

  // Give nuxt middleware to express
  app.use(nuxt.render)

  // Listen the server
  app.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()

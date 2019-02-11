const express = require('express');
const jwt = require('jsonwebtoken');
const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')
const app = express()
const bodyParser = require('body-parser');
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000

app.use(bodyParser.json());

app.set('port', port);

app.get('/api', (req, res) => {
  res.json({
    message: 'welcome api'
  })
});
app.post('/api/posts', verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    console.log('authData', authData);
    if(err){
      res.sendStatus(403)
    } else {
      res.json({
        message: 'post created...',
        authData
      })
    }
  })


});
app.post('/api/sign-in', (req, res) => {
  // mock user
  // console.log(req.body);
  const user = {
    id: 1,
    name: 'Alex',
    email: 'asd@asd.com',
    pass: 'pass'
  };
  if(
      req.body.user==user.name
      && req.body.email==user.email
      && req.body.pass==user.pass
  ){
    jwt.sign({user: user}, 'secretkey', (err, token) => {
      if(err){
        res.sendStatus(403)
      } else {
        res.json({
          token: token
        })
      }
    })
  } else {
    res.json({
      error: 'undefined',
      req: req.body.user
    })
  }

  jwt.sign({user: user}, 'secretkey', (err, token) => {
    res.json({
      token: token
    })
  })
});

/*app.get('/logout', (req, res)=>{

});*/

// verify token
function verifyToken(req, res, next){
  // get auth header value
  const bearerHeader = req.headers['authorization'];
  // check if bearer is undefined

  if(typeof bearerHeader !== 'undefined'){
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

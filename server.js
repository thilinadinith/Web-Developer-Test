process.env.NODE_ENV = process.env.NODE_ENV || "development";
const express = require('express')
const path = require('path')
const config = require('./config');
const app = express()
const contentBasePath = path.join(__dirname, 'static');
const CartController = require('./src/controllers/CartController');
const cors = require("cors");
// serve static assets normally
app.use(express.static(contentBasePath))
app.use(cors());

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
app.get('/cart/getData', CartController.getData);
app.post('/cart/postData', CartController.postData);
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(contentBasePath, 'index.html'))
// })




app.listen(config.port, config.ip, (error) => {
  if (error) {
    console.error('error', error)
  } else {
    console.info(`\n ==> 🌎  Listening on port ${config.port}. Open up http://localhost:${config.port}/ in your browser.`)
  }
})
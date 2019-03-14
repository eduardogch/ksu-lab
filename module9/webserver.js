const express = require('express');
const bodyParser  = require('body-parser');
const app = express();
const port = 8000
// use the following code on any request that matches the specified mount path
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use((req, res, next) => {
   console.log('This line is always called');
   res.setHeader('Access-Control-Allow-Origin', '*'); //can connect from any host
   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); //allowable methods
   res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
   next();
});
app.get('/messages', (req, res, next) => {
  const messages = [
    { "id" : "1", social : "Twitter" , message : "Hello world Twitter" },
    { "id" : "2", social : "Facebook" , message : "Hello world Facebook" },
    { "id" : "3", social : "Instagram" , message : "Hello world Instagram" }];
  //send the array as the response

  console.log('Twitter : Hello world Twitter')
   res.json(messages);
});

app.post('/messages', (req, res, next) => {
  const msg = req.body;
  console.log(msg.social + " " + msg.lastName);
  //sent an acknowledgment back to caller

  res.status(201).json('Post successful');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//to use this middleware in other parts of the application
module.exports=app;

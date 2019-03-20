const express = require('express');
const bodyParser  = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8000

//specify where to find the schema
const Student = require('./models/student')

mongoose.connect('mongodb://localhost:27017/IT6203', { useNewUrlParser: true })
  .then(() => { console.log("connected"); })
  .catch((e) => { console.log("error connecting", e); });

app.use(bodyParser.urlencoded({ extended: false }))
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

app.get('/students', (req, res, next) => {
  //call mongoose method find (MongoDB db.Students.find())
  Student.find()
    //if data is returned, send data as a response
    .then(data => res.status(200).json(data))
    //if error, send internal server error
    .catch(err => {
    console.log('Error: ${err}');
    res.status(500).json(err);
  });
});

app.post('/students', (req, res, next) => {
  // create a new student variable and save request’s fields
  const student = new Student({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });
  //send the document to the database
  student.save()
    //in case of success
    .then(() => { console.log('Success');})
    //if error
    .catch(err => {console.log('Error:' + err);});
});

//:id is a dynamic parameter that will be extracted from the URL
app.delete("/students/:id", (req, res, next) => {
  Student.deleteOne({ _id: req.params.id }).then(result => {
    console.log(result);
    res.status(200).json("Deleted!");
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//to use this middleware in other parts of the application
module.exports=app;

const express = require('express')
const dateFormat = require('dateformat');
const app = express()

const date = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");

app.get('/', (req, res) => res.send('Hello World! \n Jose Eduardo Gonzalez \n ' + date))

app.listen(3000, () => console.log('Example app listening on port 3000!'))

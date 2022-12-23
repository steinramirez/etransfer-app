const express = require('express')
const app = express()

app.get('/', (req, res) =>{
  res.text ='center';
  res.send('hello');
})

app.listen(3000)
console.log('server')
/*** Example From Exxpress Documentation ***/
/*const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) */

const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'))

// set view engine to ejs - Embedded JavaScript
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/portfolio', (req, res) => {
  res.render('portfolio')
})

// app.get('/', function (request, response){
//     //response.send("Hello World! Kasi Try");
//     response.render('index', {
//         name: 'Nasuha cantik',
//         visitor: 'ABC'
//     } )
// }) 

// app.get('/second', function (request, response){
//     response.render('second')
// })*/

// app.get('/test/second', function (request, response){
//     response.status(404).send('404 message')
// })

app.listen(port, () => {
  console.log(`Portfolio website listening at http://localhost:${port}`)
})
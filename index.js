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
    res.render('contact', {
      name: 'Nasuha Asri' 
    })
})

app.get('/about', (req, res) => {
  res.render('about')
})

// const projList = [
//   {
//     header: 'Sem 4 ITS Projects',
//     title: 'Tomatus Station - Order Management System',
//   },
//   {
//     header: 'Sem 4 ITS Projects',
//     title: 'Tomatus Station - Order Management System',
//   }
// ]

/* projects - Object, projList - data/value dlm object */
// app.get('/portfolio', (req, res) => {
//   res.render('portfolio', {projects: projList})
// })
const projectList = [
  { 
    header: 'Sem 4 ITS Projects',
    title: 'Tomatus Station - Order Management System',
    img: 'img/bg-title-01.jpg',
    href: 'https://github.com/nasuhasri/Tomatus-Station',
    description: 'This project is fully coded in PHP, HTML and CSS. There 2 levels of users which are staffs and suppliers. Staffs make an order and suppliers will approve the order if the stock is available. The system can do basic functions which are create, read, update and delete. In this system, I add one extra function where the system can send email notification to staffs once suppliers approve the request. In this group project, I am responsible in leading my team to work together to finish the task since I am group leader aka project manager.',
    btn: 'MyBtn'
  },
  { 
    header: 'I-Aset System',
    title: 'Zakat Melaka - i-Aset System',
    img: 'img/bg-title-02.jpg',
    href: 'https://github.com/nasuhasri/proZakat/tree/master/asset', 
    description: 'This project is fully coded in PHP, HTML and CSS. There 2 levels of users which are staffs and suppliers. Staffs make an order and suppliers will approve the order if the stock is available. The system can do basic functions which are create, read, update and delete. In this system, I add one extra function where the system can send email notification to staffs once suppliers approve the request. In this group project, I am responsible in leading my team to work together to finish the task since I am group leader aka project manager.',
    btn: 'MyBtn'
  },
  { 
    header: 'Sem 3 - Theme Park Project',
    title: 'Java - Theme Park Application',
    img: 'img/bg-title-03.jpg',
    href: 'https://github.com/nasuhasri/Tomatus-Station',
    description: 'This project is fully coded in Java and GUI. Users can enter details and choose which package they want. I am in charge in making GUI coding and that was my first experience in using GUI code. In addition, the GUI is not in our syllabus and I add that as an extra function for my group projects. I learnt the GUI code from my lecturer privately with my friends in 2 hours. The application also is using object, class and attributes which makes it easier to call the function or method.',
    btn: 'MyBtn'
  }
]

app.get('/portfolio', (req, res) => {
  res.render('portfolio', { projects: projectList })
})

app.get('/try', (req, res) => {
  res.render('try')
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
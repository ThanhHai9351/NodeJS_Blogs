const express = require('express')
const morgan = require('morgan')
const path = require('path'); // Require the path module
const handlebars = require('express-handlebars').engine;
const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())
app.use(morgan('combined'))// bỏ lại cái nãy đi


app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "resources", "views", "layouts"),
    partialsDir: [ // khác đúng 2 dấu [ ]
      path.join(__dirname, "resources/views/layouts/partials/"),
    ],
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views", "layouts"));



app.get('/', (req, res) => {
  res.render('home');
}) 

app.get('/news', (req, res) => {
  console.log(req.query);
  res.render('news')
}) 

app.get('/search', (req, res) => {
  res.render('search')
}) 

app.post('/search', (req, res) => {
  console.log(req.body)
  res.render('search')
}) 

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})
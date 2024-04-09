const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars').engine;
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./routes');
const db = require('./config/db');
const router = express.Router();
const bodyParser = require('body-parser');
db.connect();

app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
app.use(express.json());
app.use(morgan('combined'));

app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
    layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
    partialsDir: [path.join(__dirname, 'resources/views/layouts/partials/')],
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views', 'layouts'));
route(app);

app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`);
});

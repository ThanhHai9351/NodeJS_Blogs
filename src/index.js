const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars').engine;
const app = express();
const port = 3000;
const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }     ),
);
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
            console.log(`Example app listening on port http://localhost:${port}`);
          });

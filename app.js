const express = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override');
const { homeRouter } = require('./routers/home');
const { playerRouter } = require('./routers/player');
const {db} = require('./utils/db');

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', hbs({
  extname: '.hbs',
  // helpers: handlebarsHelpers,
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/player', playerRouter);

app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
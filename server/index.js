const express = require('express');
const path = require('path');
const morgan = require('morgan');
const routes = require('./Routes');

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.set('port', 3000);
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.use(routes);

app.listen(app.get('port'), () => {
  console.log('Now listening to port ', app.get('port'));
});

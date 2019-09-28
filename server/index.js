const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
app.use(morgan('dev'));

app.set('port', 3000);
app.use(express.static(path.resolve(__dirname, '..', 'public')));

app.get('/mapkey', (req, res) => {
  res.status(200).send(process.env.GMP_KEY);
})

app.listen(app.get('port'), () => {
  console.log('Now listening to port ', app.get('port'));
});

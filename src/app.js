const express = require('express');
const app = express();
const morgan = require.resolve('morgan');

const routeLembretes = require('./routes/lembretes');

app.use(morgan('dev'));
app.use('/lembretes', routeLembretes);


module.exports = app;

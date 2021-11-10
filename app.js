var express = require('express');
var path = require('path');



var indexRouter = require('./routes/index');
var pokemonRouter = require('./routes/pokemon');

const port = process.env.PORT || 3002; 

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/pokemon', pokemonRouter);



app.listen(port, () => { 
    console.log(`App is listening at http://localhost:${port}`); 
});

module.exports = app;

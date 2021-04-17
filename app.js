
const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
require('dotenv').config(); //pull config vars...

app = express();

app.use(bodyParser.urlencoded({ extended: false }));  //middleware
app.use(bodyParser.json());

//console.log(process.env);
//module specific actions.... 
app.use('/', require('./routes/index'));    //for homepage routes..
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/stocks', require('./routes/api/stocks'));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening to port ${PORT}`));//
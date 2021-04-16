
const express = require('express');
require('dotenv').config();

app = express();


app.use('/', require('./routes/hello'));    //for homepage routes..


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening to port ${PORT}`));
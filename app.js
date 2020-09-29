// modules
const express = require('express');
const webRoute = require('./routes/web');


const app = express();

//middleware


//static files 
app.use(express.static('./public'));

//view  engine
app.set('view engine', 'ejs');

//routes
app.use(webRoute);
// port
app.listen(process.env.PORT || 3000, ()=>{console.log('Portfolio running on port 3000')});
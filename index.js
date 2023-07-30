const express = require('express');
const app = express();
const path = require('path')

// Setting Assets
app.use(express.static(path.join(__dirname, 'assets')))

// Setting Up Views
app.set('view engine', 'ejs');
app.set('views',path.join(__dirname, 'views') )






// Routers
app.use('/', require('./routes'));
// Listening on Port
app.listen(8000, (err)=>{
    if(err){
        console.log("Error Connecting to server!");
    }
    console.log("Successfully Coneected to Server at port 8000!");
})
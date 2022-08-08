const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const app = express();
const bodyparser = require("body-parser");
const path = require('path')

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8080

// log requests
app.use(morgan("tiny"))

//parse request to body-parser
app.use(bodyparser.urlencoded({ extended:true }))

//set view engine
app.set("view engine","ejs")
//app.set("views",path.resolve(__dirname,"views/ejs")) where is folder views

//load assets 
app.use('/css',express.static(path.resolve(__dirname,'assets/css')))
app.use('/js',express.static(path.resolve(__dirname,'assets/js')))


app.get('/',(req,res)=>{
    // res.send('crud app'); //return text
    res.render('index');
})

app.get('/add-user',(req,res)=>{
    // res.send('crud app'); //return text
    res.render('add_user');
})
app.get('/update-user',(req,res)=>{
    // res.send('crud app'); //return text
    res.render('update_user');
})

app.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});
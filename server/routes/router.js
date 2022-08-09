const express = require('express');
const route = express.Router()
const services = require('../services/render');


route.get('/',services.homeRoutes);
route.get('/add-user',services.add_user);
route.get('/update-user',services.update_user);

// route.get('/',(req,res)=>{
//     // res.send('crud app'); //return text
//     res.render('index');
// })

// route.get('/add-user',(req,res)=>{
//     // res.send('crud app'); //return text
//     res.render('add_user');
// })
// route.get('/update-user',(req,res)=>{
//     // res.send('crud app'); //return text
//     res.render('update_user');
// })

module.exports = route
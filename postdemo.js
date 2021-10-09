
import products from "./products.js";
import Express from "express";


// const express= require('express');

const app= Express();
app.use(Express.json());
app.use(Express.urlencoded({extended:false}));


app.get('./contact.html', function (req, res) {  
    res.sendFile( __dirname + "/" + "postdemo.html" );  
 }); 

app.post('/process_post',(req,res)=>{
    console.log(req.body);
    // Prepare output in JSON format  
   const response = {  
    first_name:req.body.first_name,  
    last_name:req.body.last_name  
};   
console.log(response);  
res.end(JSON.stringify(response));  
})  ;

var server = app.listen(8000, function () {  
var host = server.address().address  
var port = server.address().port  
console.log("Example app listening at http://%s:%s", host, port); 
});
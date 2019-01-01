const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jwauth');

const PORT = 3000;

app.get('/test', function(req, res){
    res.json({
       "message": "Success"
    });
 });

 app.use(bodyParser.urlencoded({extended: false}));
 app.use(bodyParser.json());
app.listen(PORT, function(){
    console.log('Server running on port', PORT);
});
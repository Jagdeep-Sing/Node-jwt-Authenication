const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

app.get('/test', function(req, res){
    res.json({
       "message": "Success"
    });
 });

app.listen(PORT, function(){
    console.log('Server running on port', PORT);
});
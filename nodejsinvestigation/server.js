const express = require('express');
const app = express();

app.get('/home', function(request, response){
    response.send("<h1>Hello World Express WebApp!</h1>");
});

app.listen(3000, function() {
    console.log("web server listening on port 3000");
});



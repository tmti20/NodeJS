const express = require('express')
const fs = require('fs')

var app = express()

var port = 7878

// configure the route
app.get('/', function (request, response) {
    response.send('<h1>hi ther node useing express</h1>')
    
})

app.get('/courses', function (request, response) {
    // response.send('this is courses file')

    fs.readFile('courses.json', function (error, data) {
        if(error){
            console.log('<h1>Error happned</h1>')
        }
        else{
            response.send(JSON.parse(data))
        }
        
        
    })
    
})

app.listen(port, function (error) {
    if(error){
        console.log('Error happened')
    }
    else{
        console.log("app is listeing on port:" + port)
    }
    
    
})
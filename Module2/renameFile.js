const fs = require('fs')

fs.rename('abcd.txt', 'xyz.txt', function (error,data) {
    if(error){
        console.log(error)
    }
    else {
        console.log("Renamed")
    }
    
})
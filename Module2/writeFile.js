const fs = require('fs')

fs.writeFile('abcc.txt', 'hey how are you !!!',function (error) {
    if(error){
        console.error();
    }
    
})
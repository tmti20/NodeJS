var fs = require("fs"); 
const { cpuUsage } = require("node:process");

  
fs.stat('abc.txt',  function (err, fd) { 
    if (err) { 
        return console.error(err); 
    } 
    else{
        console.log(stat)
        console.log("whether this is a file", stat.isFile())
        console.log("whether this is a file", stat.isDirectory())
    }

})



// const fs=require('fs')

// fs.stat('xyz.txt',function(err,stat){
//     if(err)
//      console.error(err)
//     else
//     console.log(stat)
//     console.log("whether this is a file",stat.isFile()) 
//     console.log("whether this is a dir",stat.isDirectory()) 
// })
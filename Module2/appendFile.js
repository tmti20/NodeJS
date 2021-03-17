const fs=require('fs')

fs.appendFile('xyz.txt','\n socond line',function(err,stat){
    if(err)
     console.error(err)
    else
    console.log("Appended")
    // console.log("whether this is a file",stat.isFile()) 
    // console.log("whether this is a dir",stat.isDirectory()) 
})
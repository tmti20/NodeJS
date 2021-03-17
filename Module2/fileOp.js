// const { json } = require("body-parser");
var fs = require("fs"); 
var yargs = require("yargs"); 

var filename = yargs.argv.filename
var fileArray =[]
console.log('filename', filename)

// take the filename cmd like
// get array from filenames.txt txt file
// save the array and check whether the filename exists in that arry or not
// if yes
//throw error
// else you add new file name to taht array and save it
// create this new file an write your are awesome

fs.readFile('fileNames.txt', function (error, data) {
    if(data){
        // fileArray=data.toString()
        fileArray= JSON.parse(data);
        console.log("file Exist or Not", fileArray.includes(filename))
        if(fileArray.includes(filename)){
            return console.error("File already exists")
        }
        else{
            fileArray.push(filename)
            console.log("fileArray", fileArray)
            fs.writeFile("fileNames.txt", JSON.stringify(fileArray), function (error) {
                if(error){
                   return console.log("File Name insert array Error")
                }
            })

            // write something in the file
            fs.writeFile(filename, "Awesome Working with Node", function (error) {
                if(error){
                   return console.log("Text Insert Error")
                }
                else{
                    console.log("successfully inserted the text")
                }
                
            })
        }
        
    }
    
    
})







// const fs= require('fs')
// const yargs =require('yargs')

// let filename= yargs.argv.filename
// let fileArray =[]
// /*
// take the filename from cmd line 
// get array from filenames.txt  file 
// save the array and chcek whether the filename exists in that array or not 
// if yes 
//  throw error
//  else you add new file name to that array and save it 
//  +
//  create this new file and write your are awesome 

// */

// fs.readFile('filnames.txt',function(err,data){
//    if (err)
//     return console.error(err)
//    else
//    fileArray=data.toString()
//    if (fileArray.includes(filename))
//     return console.error()
//    else
//      fs.writeFile(filename,'You are aWesome',function(err,data){
         
//      }) 
     
// })
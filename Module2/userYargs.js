const yargs = require('yargs')
const fs = require('fs')

console.log(yargs.argv)
console.log(yargs.argv._)
// console.log(yargs.argv.filename) // node userYargs.js 9 7 ga --filename="abc.txt"

//read a file
fs.readFile('abc.txt', function(error, data){
    if(data){
        console.error('Error in reading files')
    }
    else{
        console.log(data.toString())
    }
})

console.log(yargs.argv.filename)

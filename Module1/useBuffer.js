var buf1=Buffer.from('123456789')
var buf2=Buffer.from('Hello')

buf2.copy(buf1, 2)

console.log(Buffer.concat([buf1, buf2]).toString())

console.log(buf2.toString())
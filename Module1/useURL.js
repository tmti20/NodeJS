var url = require('url');
var add = "http://localhost:6000/index.html?year=2021";

let r = url.parse(add)
console.log(r.host)
console.log(r.pathname)
console.log(r.search)
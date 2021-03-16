var util = require('util');

txt="Congratulate %s on his %dth birthday";

let r = util.format(txt, "Tanvir", 11)
console.log(r)
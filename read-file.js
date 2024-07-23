const  readFile = require('node:fs');


const reaf =   readFile.readFileSync('./package.json', 'utf8');

console.log(reaf);



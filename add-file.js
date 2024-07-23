const appendF = require('node:fs');

const addFile = appendF.appendFileSync('messageAdded.txt', 'data to append', 'utf8'); 

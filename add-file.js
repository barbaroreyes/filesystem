const appendF = require('node:fs');

appendF.appendFileSync('new_file.txt', '\n data to append', 'utf8'); 

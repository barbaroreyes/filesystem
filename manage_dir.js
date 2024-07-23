const  readFile = require('node:fs');


readFile.mkdirSync("../new_dir")
/*readFile.readdirSync("../new_dir");*/
/*readFile.copyFileSync("new_file.txt", "../new_dir/messageAddedOn.txt")*/
readFile.rmdirSync("../new_dir");
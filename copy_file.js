const copyFile = require('node:fs')
copyFile.copyFileSync("new_file.txt", "messageAdded.txt")
console.log('new_file.txt was copied to messageAdded.txt');
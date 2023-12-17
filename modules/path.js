const path = require('path')

console.log(path.basename(__filename))// full file name
console.log(path.extname(__filename))// extanion name '.js' '.css' others
console.log(path.dirname(__filename))// full path C:/...../
console.log(path.parse(__filename))// about full path info in obj '{}'








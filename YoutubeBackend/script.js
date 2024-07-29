const fs = require('fs');
/*
writefile
appendFile
copyfile
rename
unlink
*/

// fs.writeFile("hey.txt", "hey hello kaise ho", function(err) {
//     if(err) console.error(err);
//     else console.log("done");
// })

fs.appendFile("hey.txt", " mai toh accha hu", function(err) {
    if(err) console.error(err);
    else console.log("done");
})
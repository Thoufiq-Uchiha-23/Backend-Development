const fs = require('fs');
/*
writefile
appendFile
copyfile
rename
unlink
*/

// WRITE FILE
// fs.writeFile("hey.txt", "hey hello kaise ho", function(err) {
//     if(err) console.error(err);
//     else console.log("done");
// })

// APPEND FILE
// fs.appendFile("hey.txt", " mai toh accha hu", function(err) {
//     if(err) console.error(err);
//     else console.log("done");
// })

// RENAME FILE
// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err)
//     else console.log("done");
// })

// COPY FILE
// fs.copyFile("hello.txt", "./copy/replica.txt", function (err) {
//     if(err) console.error(err);
//     else console.log("done");
// })

// DELETING FILE
// fs.unlink("hello.txt", function (err) {
//     if(err) console.error(err);
//     else console.log("removed");
// })

// DELETING DIRECTORY/FOLDER
// fs.rmdir("./copy", {recursive: true},function(err) {
//     if(err) console.error(err);
//     else console.log("removed");
// })

// NOTE: s.rmdir(path, { recursive: true }) will be removed. 
// Use fs.rm(path, { recursive: true }) instead
fs.rm("./copy", {recursive: true},function(err) {
    if(err) console.error(err);
    else console.log("removed");
})

// HTTP
const http = require('http')

const server = http.createServer(function(req, res) {
    res.end("hello world")
})

server.listen(3000)
// Fundamentals of JavaScript
// Arrays and objects
// functions return
// async js coding

// ARRAYS
// forEach map filter find indexOf
var arr = [1,2,3,4]
// forEach
// arr.forEach(function(val) {
//     console.log(val + " hello");
// })
// OUTPUT:
// 1 hello
// 2 hello
// 3 hello
// 4 hello

// map
var newarr = arr.map(function(val){
    return 13;
})

// console.log(newarr);
// OUTPUT:
// [13, 13, 13, 13]
// var newarr = arr.map(function(val){
//     return val;
// })
// O/P: [1, 2, 3, 4]
// var newarr = arr.map(function(val){
//     return val * 3;
// })
// // O/P: [3, 6, 9, 12] 
// console.log(newarr);

// filter
// var ans = arr.filter(function(val) {
//     if(val >= 3) { return true;}
//     else return false;
// })
// // O/P: [3, 4]
// var ans = arr.filter(function(val) {
//     if(val >= 2) { return true;}
//     else return false;
// })
// // O/P: [2, 3, 4]
// var ans = arr.filter(function(val) {
//     if(val >= 12) { return true;}
//     else return false;
// })
// // O/P: []
// console.log(ans);

// find
// var arr = [1, 2, 2, 3, 4]

// var ans = arr.find(function(val){
//     if(val === 2) return val;
// })

// console.log(ans);

// indexOf
// arr.indexOf(12)
// O/P: -1 (means it's not present)
// arr.indexOf(2)
// O/P: 1 (means it's at index 1)

// Objects
// kuchbhi on left side colon(:) kuchbhi on right side inside curly braces "{}" is object
// a pattern in which storing in key value pairs is object with curly braces
// var obj = {
//     name: "harsh",
//     age: 12,
//     kuchhbhi: "kuchhbhi"
// }

// // Object.freeze(obj)

// obj.age = 25
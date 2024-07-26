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
var newarr = arr.map(function(val){
    return val * 3;
})
// O/P: [3, 6, 9, 12] 
console.log(newarr);


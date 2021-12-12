// const rachFunctions = require("./rachFunctions")

// console.log(rachFunctions.add(4,10))

// console.log(rachFunctions.subtract(4,10))


// // destructuring is really good.
// // you can destructure an array or an object
// // select a property by it's key
// // If only want add and subtract out of the object:
// const {add, subtract} = require("./rachFunctions")

// console.log(add)

// // Another example of destructuring:
// // it's used a lot in react to pull out a keyword/value

// const pet = {
//     name:"Bugs",
//     type:"Bunny",
//     food:"carrots",
// }

// let {name} = pet
// console.log(name)

// // Another example of destructing in an array:

// const movies = [
//     { name: "Gladiator", oscarWin: true },
//     "Spiderman",
//     100
// ]

// const [movie1, movie2, movie3] = movies

// console.log(movie1)
// console.log(movie2)
// console.log(movie3)

// const os = require("os");
// const fs = require("fs");

// let userDetails = os.userInfo().username;

// fs.appendFile("oh-hi.txt", `hello ${userDetails}`, (err) => {
//     if (err){
//         console.log("oops");
//     }
// })

// ALWAYS read the documentation when learning a new technology

// NPM = node package manager

// dependencies = packages



const _ = require("lodash");

// lodash is a cool utility library which makes a lot of things quicker for us
// use an underscore for the variable name

// check weekly downloads and last published 
// if its really old and doesnt have many downloads it wont be as stable

// over 30 

// medium.com for extra reading
// dan abramov = famous software dev
// dev.to = social for devs

var array = [1, 2, 3];
 
_.reverse(array);
// => [3, 2, 1]
 
console.log(array);
// => [3, 2, 1]



var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']

// dont push node_modules to github
// create a .gitignore file
// .gitignore node_modules
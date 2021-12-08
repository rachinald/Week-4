const add = (num1, num2) => {
    return num1 + num2
}

const subtract = (num1, num2) => {
    return num1 - num2
}

module.exports = {
    name: "rachFunctions.js",
    desc: "helper functions to help you do things",
// dont need to use a keyword if you dont want to, so you could just use "add" not "add: add"
    add: add,
// for example:
    subtract
}


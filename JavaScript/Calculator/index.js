// Creating a Calculator logic in js

function calculate(a, b, callback) {
  return callback(a, b)
}

let result = calculate(10, 20, (a, b) => a + b)
console.log(result)

let subResult = calculate(10, 20, (a, b) => a - b)
console.log(subResult)

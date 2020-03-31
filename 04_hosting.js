
console.log(sum(1,2))   // 3
function sum(a, b){
    return a+b
}
console.log(sum(1,2))   // 3

console.log(i)          // undefined
var i = 42
console.log(i)          // 42

// but const and let dont have hosting
console.log(x)          // error
const x = 1;
console.log(x)          // 1

//Function Expression vs Function Declaration
square(2)               // 4
function square(num){   // this's Function Declaration
    return num **2
}
square(2)               // 4
minusOne(1)             // error
var minusOne = function(num){ // this's Function Expression
    return num-1
}
minusOne(1)             // 0

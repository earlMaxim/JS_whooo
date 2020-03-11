//As a fact we have 8 types -- number, string, boolean, null, undefined, object, symbol          BigInt (new)

console.log(typeof 0)           //number  +-2^53
console.log(typeof true)        //boolean
console.log(typeof 'hello')     //string
console.log(typeof undefined)   //undefined
console.log(typeof Math)        //object
console.log(typeof Symbol)      //function
console.log(typeof null)        //object
console.log(typeof function(){})//function
console.log(typeof NaN)         //nuber
console.log(typeof 1n)          //BigInt

//type conversion

//'', 0, null, undefined, NaN, false -> false
//[], {}, function(){}               -> true

//strings and numbers

console.log(1+'2')                  // '12'
console.log(1-'2')                  // -1
console.log('2'*'3')                // 6
console.log(1 + 2 + 'px')           // '12px'
console.log(1 + +'2')               // 3

// == vs ===

console.log(2 == '2')                   //true
console.log(2 === '2')                  //false
console.log(null==undefined)            //true
console.log('0' == false)               //true
console.log('0'=0)                      //true






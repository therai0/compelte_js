let number = 12
console.log(typeof(number)); //number

let intoString = String(number)
console.log(typeof(intoString)) // string


//let convert the string into number
let num = "123"
console.log(typeof(num)); // it will give string 
let intoNumber =Number(num)
console.log(typeof(intoNumber)) // it will give number


//let see another example 
let n = "123ab"
let intoN = Number(n)
console.log(typeof(n)) //it will give number
// but the case is ab isn't number but it will give you number 
// let see what is the output or what value is store in intoN
console.log(intoN) // NaN this is Not a Number 123ab is not number.
//if n = null then it will convert into 0

// null => 0
// true => 1 false => 0
// "33" => 33
// "123ab" => NaN
// ""=> false // for boolean



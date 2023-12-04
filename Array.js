// Array are mutuable in js

let arr = [12, 34, 5, 56, 6]

//printing the all element of the array
// for(let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i])
// }

let len = arr.length //it will return the length of the array
// console.log(len)

// Some operation that can be done in array
// push() add element in last of the array
// pop() // delement the element from the last
//
arr.unshift(9000) // it will add the element at the begining of the array
// console.log(arr[0])
arr.shift() //it will delete the element which is at the begining.
// console.log(arr[0])

let newArr = [23, 45, 56, 67]
let afterConcat = newArr.concat(arr) // we can even concat the two array
// console.log(afterConcat)

// splicing use to replace and delete the certain element of the array
let a = [1, 2, 3, 4, 5]
// console.log(a)
// [1,2,3,4,5]

a.splice(0, 2, 34, 45)
// element will delete from the 0 index and it will delete the 2 index of array and replace with 34 and 45 
// of that   deleted index

// console.log(a)
// [ 34, 45, 3, 4, 5 ]

// a.forEach((element)=>{
//     console.log(element)
// })

// spread in js
// this is the another way to merge the two array in js
let cricketer = ["paras", "Sandeep", "Ganu"]
let footballer = ["Hari", "Ayush", "Santosh"]
let all_players = [...cricketer, ...footballer]
// console.log(all_players)

let num = [12,34,45,5,[45,[5,7],78],[90,89]]
let newArry = num.flat(2)
// console.log(newArry)
// return the new arry with break the all sub array into new array
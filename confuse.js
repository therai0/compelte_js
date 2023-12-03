console.log(1 + "3") // 13 not 4
console.log("3" + 3) // 33 not 3
console.log("1" + 2 + 4) // 124 not 17
console.log(1 + 2 + "3") // 33 not 123 

let userData = {
    email: "rai123@gmail.com",
    username: "rairai"
}
// console.log(userData.email)
let userTwo = userData
userTwo.email = "iamdon333@gamil.com"
console.log(userData.email)
console.log(userTwo.email);


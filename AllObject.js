
let employee = {
    name: "Hari",
    age: 23,
    email: "hari@gmail.com",
    isPresentToday: true,
    msgMe: function () {
        console.log("If you are free then you can message me")

        //even we can access the element of the object using this keyword
        console.log(`${this.age} ${this.email}`)
    }
}
//accesing  the element of the object

console.log(employee.name) //not recommend this syntex
// console.log(employee[name]) // you can access the element of the object with this syntex 
//because name is string so you need to pass name as the string
//the correct syntex is 

console.log(employee["name"])

//Object is mutable in js so we can modify the value of the object 
employee["name"] = "Ayush"
console.log(employee["name"])
//output is "Ayush"


//even we can freez the object
Object.freeze(employee)
//now we cannot manipulate the object
console.log(employee)

// even we can call this function in this way
employee.msgMe()


//Object part-2
let newObj = new Object() // thsi type of object is called singleton object
// console.log(newObj)

// we can create the object inside the object it is called neasted object
const user ={
    name:"Hari",
    address:{
        home:"Ktm",
        presentAdd:"Btm",
        toll:12
    }
}
// console.log(user.address.home)


//we can concat the two object 
const obj1 = {
    name:"Hari",
    age: 12
}
const boj2 = {
    isPresent: true,
    above18:false
}

// lests marge the two object
const newObj1 = {...boj2,...obj1}
console.log(newObj1) 
console.log(Object.keys(newObj1))
// it will return the all the keys of the newObject in array
//now we can use the loop in this key word
// as like keys we can access the values of the object 

console.log(Object.values(newObj1))




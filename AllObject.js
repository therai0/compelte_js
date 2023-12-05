
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



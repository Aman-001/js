// PRIMITIVE data types

// 7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

const score = 100;
const scoreValue = 100.3
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const Id = Symbol('1234')           // both Id's are different 
const anotherId = Symbol('1234')

//Refrence(NON PRIMITIVE)

//Array, Objects, Functions

const heros = ["Shaktiman","Power rangers","Ben10"]
let myObj = {
    name: "Aman", age: 22
}

const myFunction = Function()
{
    console.log("Hello world");
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //
// Types of memory:
// Stack(PRIMITIVE), Heap(NON-PRIMITIVE)

let myYouTubename = "AMANOP"
let anotherName = myYouTubename
anotherName = "Aman_not_so_OP"

console.log(myYouTubename);
console.log(anotherName);

let userOne = {
    email: "amanc228d@gmail.com",
    upi: "aman@ylb"
}

let userTwo = userOne

userTwo.email = "dikkikashyap@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
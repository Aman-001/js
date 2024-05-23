//     if
const isUserloggedIn = true
const temperature = 100

// if ( temperature === 10 ){
//     console.log("less than 100");
// } else {
//     console.log("temperature is greater than 90");
// }

// console.log("Execute");
//   operators =>  <, >, <=, >=, ==, !=, ===, !==

// const score = 500

// if (score > 100) {
//     let power = "Murderous Intent"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if (balance > 500) console.log("test1"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 950");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard ) {
    console.log("User is Allowed");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
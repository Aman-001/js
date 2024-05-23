const user = {
    username: "Aman",
    price: 500,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "aman"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "aman"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "aman"
    console.log(this);
}

//We can use arrows in objects but not in functions

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "aman"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()
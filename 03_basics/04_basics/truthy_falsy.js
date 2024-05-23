// falsy values

//  0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

//  "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {             {PROPER WAY}
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): (All about null, undefined)

let val1;
// val1 = 10 ?? 100
// val1 = null ?? 100
// val1 = undefined ?? 150
val1 = null ?? 100 ?? 150

console.log(val1);

// Terniary Operator

// condition ? true : false

const RamenPrice = 200
RamenPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
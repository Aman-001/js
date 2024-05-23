let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let ValueInnumber = Number(score)  //change krne ke lie
console.log(typeof ValueInnumber);
console.log(ValueInnumber); 

//"33" => 33
//"33abc" => NaN(Not A Number)
//true=1;  false=0;

let IsLoggedIn = "AMAN"
let BooleanIsLoggedIn = Boolean(IsLoggedIn)
console.log(BooleanIsLoggedIn);

//1 => true;    0 => false 
//"" => false
//"AMAN" => true



/**********************OPEATIONS**************************/

let value = 3
let NegValue = -value
console.log(NegValue)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")

console.log(2 + 3 * 4 % 2); //use paranthesis for better readibility

/* If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.*/
const Name =  "Aman"
const repoCount = 10

//console.log(name + repocount + "Value")

console.log(`Hello my name is ${Name}} and my repoCount is ${repoCount}`);

const gameName = new String('AmanChauhan')

console.log(gameName);
console.log(gameName.length);
console.log(gameName.charAt(0));
console.log(gameName.indexOf('h'));


const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-7,4)
console.log(anotherString);
console.log(gameName.trim());   //remove unnecessary spaces

const url = "https://Aman.com/aman%99chauhan"
console.log(url.replace('%99','-'));
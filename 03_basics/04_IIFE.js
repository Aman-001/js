// Immediately Invoked Function Expressions (IIFE)


(function one(){
    // named IIFE
    console.log(`DB Secured`);
})();

( (name) => {
    console.log(`DB Secured TWO ${name}`);
} )('aman')

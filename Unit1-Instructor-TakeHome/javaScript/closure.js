// ==== Closures ==== 

/* Task 1: Study the code below and explain in your own words why nested function can access the variable internal. */

// variable defined outside of the function
const external = "I'm outside the function";

function myFunction() {
  // external is declared outside of myFunction but it is accesible inside of this function 
  //because closure allows js to see variables outisde of its scope
  console.log(external);
  
  //internal is decalred inside of the function
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    //internal is visible inside of nested function
    //because internal is declared outside of nestedFunction
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 
//1) Closure is created everytime a function is created
//2) Closure allows you to see a function's outer/parent scope
//3> Scope determines what is visible/accesible

//so in sumary when a function is created a new scope is created. 
//A nested function can access the parent function's scope because because of closure. 
//In the example above, my function is the parent scope and nestedFunction can access the parent function's variables

/* Task 2: Counter */

/* Create a function called `summation` that accepts a parameter and uses a counter to return the summation of that number. For example, `summation(4)` should return 10 because 1+2+3+4 is 10. */

function summation(n) {

  let sum = 0;
  //start the count at 1, and if the "i" is less than or equal to the number, add 1 to the number
  //in this case if "i" is less than 4, add 1 and loop again
  for (let i = 1; i <= n; i++) {
    //add the value to the variable until it reaches the condition
    sum += i;
  }
  //return the vale
  return sum;
}
//test
console.log(summation(4));
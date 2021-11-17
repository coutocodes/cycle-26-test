// Conditionals
// Definition: Perform different operations based on the given condition

// Task: Define whether a number is positive or negative
let integer = 1

// Inside the parenthesis in an if statement, we write a logical statement checking whether its true or false
if (integer < 0) {
    // Inside the curly brackets is our code block that runs IF we meet our condition
    console.log("Negative: " + integer)
} else {
    // If we didn't meet our logical statement, ELSE code block will execute
    console.log("Positive: " + integer)
}

// Task: Setting up a security web site that grants users over the age of 18+ access to the site. Write a conditional that gives users who at 18+ access and logs access denied for users who do not meet the given condition. 
let userAge = 19

if (userAge >= 18) {
    // Inside the curly brackets is our code block that runs IF we meet our condition
    console.log("Access granted")
} else {
    // If we didn't meet our logical statement, ELSE code block will execute
    console.log("Access denied")
}

// Task:
/*
    Nested if/else statement
    Declare a variable called num
    Add an if/else statement that checks if num is positive & greater than 100
    Add another statement to check if num is positive but less than 100
*/
let num = '100'

if(num > 100) {
  console.log(num + " is positive and greater than 100")
} else if(num < 100) {
  if(num > 0) {
    console.log(num + " is positive and less than 100")
  }
} else if(num < 0) {
  console.log(`${num} is negative.`)
} else {
  if(num === 100) {
    console.log("Aced it!")
  } else {
    console.log("error NaN " + num + " is a " + typeof(num))
  }
}

// Task: What is your letter grade?
/* 
  If student gets 90 or higher: log A
  If 80 or above: log B
  if 70 or above: log C
  if 55 or above: log D
  if below 55: log F
*/
let grade = 54

// JavaScript runs Top to Down approach
if(grade >= 90) {
  console.log('A')
} else if(grade >= 80) {
  console.log('B')
} else if(grade >= 70) {
  console.log('C')
} else if(grade >= 55) {
  console.log('D')
} else {
  console.log('F')
}

console.log("=== Remainders ===")
console.log(4 % 3)
console.log(20 % 3)
console.log(20 % 9)

// 24 ==> true
console.log(24 % 2 === 0)

// 35 Odd?
console.log(35 % 2 === 1)
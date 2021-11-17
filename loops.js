// =========== LOOPS =============

// Definition: A sequence of instructions that are repeated for either certain number of times or until a condition is met

// Syntax:
// for(statement 1; statement 2; statement 3) {
  // code block to be executed
//}

// Statement 1: executed before the loop - this is where code block starts
// Statement 2: condition for running the loop (the code block)
// Statement 3: Executed each time AFTER the loop (the code block) has been executed

// Task: Loop that iterates from 0 to 9

for ( let x = 0 ; x <= 9 ; x += 1 ) {
    console.log(x)
}

for(let i = 0; i < 10; i++){
    console.log(`Mawr! ${i}`)
}

// Loop from 10 to 1
for(let i = 10; i >= 1; i--){
    console.log(`Countdown ${i}`)
}

// Task: Write a loop that outputs 1, 3, 5, 7, 9
for(let o = 1; o < 10; o += 2){
    console.log(`Odd! ${o}`)
}

for(let e = 2; e < 11; e += 2){
    console.log(`Even! ${e}`)
}
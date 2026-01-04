/**
 * File: 05_loops_basics.js
 * Topic: Repetitive Tasks Automation using Loops
 * Description:
 * This file demonstrates the use of for loops, while loops, and control statements
 * such as break and continue in JavaScript.
 * Author: Mudasir Razvi
 */

// ===================================
// 1. FOR LOOP — Counting from 1 to 10
// ===================================
console.log("=== FOR LOOP: Counting from 1 to 10 ===");

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("\n");

// ===================================
// 2. WHILE LOOP — Countdown from 10 to 1
// ===================================
console.log("=== WHILE LOOP: Countdown from 10 to 1 ===");

let count = 10;
while (count >= 1) {
    console.log(count);
    count--;
}

console.log("\n");

// ===================================
// 3. BREAK — Stop loop at a specific number
// ===================================
console.log("=== FOR LOOP WITH BREAK: Stop at 5 ===");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Loop terminates when i reaches 5
    }
    console.log(i);
}

console.log("\n");

// ===================================
// 4. CONTINUE — Skip a specific number
// ===================================
console.log("=== FOR LOOP WITH CONTINUE: Skip 5 ===");

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue; // Skip iteration when i is 5
    }
    console.log(i);
}

/**
 * File: 06_nested_loops_challenge.js
 * Topic: Complex Repetition Logic using Nested Loops
 * Description:
 * This file demonstrates nested loops in JavaScript.
 * Examples:
 * 1. Multiplication Table Generator
 * 2. Star Pattern Printing
 * Author: Mudasir Razvi
 */

// ===================================
// 1. Multiplication Table Generator
// ===================================
const tableNumber = 2; // Change this number to generate other tables
console.log(`=== Multiplication Table of ${tableNumber} ===`);

for (let i = 1; i <= 10; i++) {
    console.log(`${tableNumber} × ${i} = ${tableNumber * i}`);
}

console.log("\n");

// ===================================
// 2. Star Pattern (Right-Angled Triangle)
// ===================================
const rows = 5; // Number of rows in the pattern
console.log("=== Star Pattern (Right-Angled Triangle) ===");

for (let i = 1; i <= rows; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}

console.log("\n");

// ===================================
// 3. Square Star Pattern
// ===================================
const size = 4; // Size of square
console.log("=== Square Star Pattern ===");

for (let i = 1; i <= size; i++) {
    let line = "";
    for (let j = 1; j <= size; j++) {
        line += "* ";
    }
    console.log(line);
}

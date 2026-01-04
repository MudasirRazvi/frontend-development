/**
 * File: 02_operators_logic.js
 * Topic: Arithmetic and Logical Operators in JavaScript
 * Description:
 * This file demonstrates arithmetic, comparison, and logical operators
 * with practical examples, including a user login + premium subscription check.
 * Author: Mudasir Razvi
 */

// ===================================
// 1. Arithmetic Operators
// ===================================
const a = 10;
const b = 3;

console.log("=== Arithmetic Operators ===");
console.log(`Addition: ${a} + ${b} = ${a + b}`);
console.log(`Subtraction: ${a} - ${b} = ${a - b}`);
console.log(`Multiplication: ${a} * ${b} = ${a * b}`);
console.log(`Division: ${a} / ${b} = ${a / b}`);
console.log(`Modulus: ${a} % ${b} = ${a % b}`);
console.log(`Exponentiation: ${a} ** ${b} = ${a ** b}`);

console.log("\n");

// ===================================
// 2. Comparison Operators
// ===================================
console.log("=== Comparison Operators ===");
console.log(`a > b: ${a > b}`);
console.log(`a < b: ${a < b}`);
console.log(`a >= b: ${a >= b}`);
console.log(`a <= b: ${a <= b}`);
console.log(`a === b: ${a === b}`);
console.log(`10 === "10": ${10 === "10"} // Strict equality checks type`);

console.log("\n");

// ===================================
// 3. Logical Operators — User Access Example
// ===================================

const isLoggedIn = true;   // User login status
const hasPremium = false;  // Premium subscription status

console.log("=== Logical Operators ===");
console.log(`User logged in: ${isLoggedIn}`);
console.log(`Has premium subscription: ${hasPremium}`);

// AND (&&) - Both conditions must be true
const canAccessPremium = isLoggedIn && hasPremium;
console.log(`Can access premium content: ${canAccessPremium}`);

// OR (||) - At least one condition is true
const canAccessBasic = isLoggedIn || hasPremium;
console.log(`Can access basic features: ${canAccessBasic}`);

// NOT (!) - Reverses boolean value
const isGuest = !isLoggedIn;
console.log(`Is guest user: ${isGuest}`);

// ===================================
// Complex Condition Example
// ===================================
if (isLoggedIn && hasPremium) {
    console.log("✓ Welcome! You have full premium access.");
} else if (isLoggedIn && !hasPremium) {
    console.log("✓ Welcome! You have basic access only.");
} else {
    console.log("✗ Please log in first.");
}
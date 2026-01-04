/**
 * File: 01_variables_and_types.js
 * Topic: Variable Declaration and Data Types in JavaScript
 * Description:
 * This file demonstrates the use of `var` for variable declaration
 * and identifies all 7 primitive data types using the `typeof` operator.
 * Author: Mudasir Razvi
 */

// ===================================
// Variable Declaration using `var`
// ===================================


// 1. STRING — Textual data
var userName = "Alice";
console.log("String:", typeof userName); // string


// 2. NUMBER — Integer and decimal values
var age = 25;
var price = 99.99;
console.log("Number (age):", typeof age);     // number
console.log("Number (price):", typeof price); // number


// 3. BOOLEAN — True or false values
var isLoggedIn = true;
var isAdmin = false;
console.log("Boolean (isLoggedIn):", typeof isLoggedIn); // boolean


// 4. NULL — Intentional empty value
var emptyValue = null;
console.log("Null:", typeof emptyValue); 
// ❗ JavaScript Quirk:
// typeof null returns "object"
// This is a long-standing bug in JavaScript kept for backward compatibility.


// 5. UNDEFINED — Declared but not assigned
var notAssigned;
console.log("Undefined:", typeof notAssigned); // undefined


// 6. BIGINT — Very large integers
var largeNumber = 9007199254740992n;
console.log("BigInt:", typeof largeNumber); // bigint


// 7. SYMBOL — Unique and immutable identifier
var uniqueId = Symbol("id");
console.log("Symbol:", typeof uniqueId); // symbol

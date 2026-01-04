/**
 * File: 04_switch_statements.js
 * Topic: Efficient Multi-Condition Handling using Switch Statements
 * Description:
 * This file demonstrates how to use switch statements for multiple conditions.
 * Examples:
 * 1. Weekday Resolver (Day number to Weekday name)
 * 2. Medal Assignment System (Position to Medal)
 * Author: Mudasir Razvi
 */

// ===================================
// Task 1: Weekday Resolver
// ===================================

/**
 * Returns the weekday name based on a number (1–7)
 * @param {number} dayNumber
 * @returns {string} Weekday name or invalid message
 */
function getDay(dayNumber) {
    switch (dayNumber) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday";
        default:
            return "Invalid day number"; // Handles invalid input
    }
}

// Test Cases
console.log("=== Weekday Resolver ===");
console.log(getDay(1));  // Monday
console.log(getDay(5));  // Friday
console.log(getDay(10)); // Invalid day number

console.log("\n--------------------------------\n");

// ===================================
// Task 2: Medal Assignment System
// ===================================

/**
 * Returns the medal based on competition position
 * @param {number} position
 * @returns {string} Medal name or "No Medal"
 */
function getMedal(position) {
    switch (position) {
        case 1:
            return "Gold Medal";
        case 2:
            return "Silver Medal";
        case 3:
            return "Bronze Medal";
        default:
            return "No Medal"; // Handles positions beyond 3
    }
}

// Test Cases
console.log("=== Medal Assignment ===");
console.log(getMedal(1)); // Gold Medal
console.log(getMedal(2)); // Silver Medal
console.log(getMedal(3)); // Bronze Medal
console.log(getMedal(5)); // No Medal

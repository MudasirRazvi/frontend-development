/**
 * File: 03_conditionals_ifelse.js
 * Topic: Decision Making using if, else if, and else
 * Description:
 * This file demonstrates conditional statements in JavaScript.
 * Examples:
 * 1. Age eligibility check (driving & voting)
 * 2. Score evaluation & grade assignment
 * Author: Mudasir Razvi
 */

// ===================================
// Task 1: Age Eligibility Check
// ===================================

/**
 * Determines what a user is allowed to do based on age.
 * @param {number} age - User's age
 */
function checkAgeEligibility(age) {
    if (age >= 18) {
        if (age >= 21) {
            console.log("You can drive and vote.");
        } else {
            console.log("You can vote, but cannot drive yet.");
        }
    } else {
        console.log("You are too young. You cannot drive or vote.");
    }
}

// Test Cases
console.log("=== Age Eligibility Check ===");
checkAgeEligibility(25);  // You can drive and vote.
checkAgeEligibility(19);  // You can vote, but cannot drive yet.
checkAgeEligibility(15);  // You are too young. You cannot drive or vote.

console.log("\n--------------------------------\n");

// ===================================
// Task 2: Score Evaluation & Grade Assignment
// ===================================

/**
 * Assigns a grade based on the score.
 * @param {number} score - Score of the student (0-100)
 */
function assignGrade(score) {
    if (score >= 90) {
        console.log(`Score: ${score} | Grade: A`);
    } else if (score >= 80) {
        console.log(`Score: ${score} | Grade: B`);
    } else if (score >= 70) {
        console.log(`Score: ${score} | Grade: C`);
    } else if (score >= 60) {
        console.log(`Score: ${score} | Grade: D`);
    } else {
        console.log(`Score: ${score} | Grade: F (Failed)`);
    }
}

// Test Cases
console.log("=== Score Evaluation ===");
assignGrade(95);  // Grade: A
assignGrade(85);  // Grade: B
assignGrade(75);  // Grade: C
assignGrade(65);  // Grade: D
assignGrade(45);  // Grade: F (Failed)

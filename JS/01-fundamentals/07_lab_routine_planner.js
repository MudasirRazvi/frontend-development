/**
 * File: 07_lab_routine_planner.js
 * Topic: Integration of All Concepts
 * Description:
 * This program suggests a daily routine based on the user's day
 * (e.g., "Monday") and their energy level (1-10).
 * Concepts used:
 * - Variables
 * - Logical operators
 * - if-else conditions
 * - switch statements
 * Author: Mudasir Razvi
 */

// ===================================
// User Input (Simulated)
// ===================================
const day = "Monday";      // Example: Monday, Tuesday, etc.
const energyLevel = 7;     // Energy scale: 1–10

console.log(`Day: ${day}`);
console.log(`Energy Level: ${energyLevel}`);
console.log("\n=== Suggested Routine ===");

// ===================================
// Input Validation
// ===================================
if (energyLevel < 1 || energyLevel > 10) {
    console.log("Invalid energy level! Please enter a value between 1 and 10.");
} else {

    // ===================================
    // Routine Suggestion using Switch + Logic
    // ===================================
    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (energyLevel >= 7) {
                console.log("High energy day! Suggested activities:");
                console.log("- Focus on work or studies");
                console.log("- Exercise or gym session");
                console.log("- Learn a new skill");
            } else if (energyLevel >= 4) {
                console.log("Moderate energy day. Suggested activities:");
                console.log("- Complete important tasks");
                console.log("- Light exercise or walk");
                console.log("- Relax in the evening");
            } else {
                console.log("Low energy day. Suggested activities:");
                console.log("- Minimal work");
                console.log("- Take rest");
                console.log("- Sleep early");
            }
            break;

        case "Saturday":
        case "Sunday":
            if (energyLevel >= 6) {
                console.log("Weekend with good energy. Suggested activities:");
                console.log("- Outdoor activities");
                console.log("- Meet friends or family");
                console.log("- Personal projects");
            } else {
                console.log("Low-energy weekend. Suggested activities:");
                console.log("- Relax at home");
                console.log("- Watch movies or read");
                console.log("- Recover energy");
            }
            break;

        default:
            console.log("Invalid day entered! Please use a valid weekday name.");
    }
}

/**
 * File: 01_object_literals_and_methods.js
 * Topic: OOP Basics – Object Literals, Methods, and `this`
 * Description:
 * This file demonstrates how to group related data and behavior
 * using JavaScript object literals.
 *
 * Key Concepts:
 * - Object literals
 * - Properties vs methods
 * - Accessing object data using dot notation
 * - Understanding and using the `this` keyword
 *
 * Author: Mudasir Razvi
 */

// ==================================================
// 1. OBJECT LITERAL – GROUPING RELATED DATA
// ==================================================

/*
Instead of creating separate variables, we group related
information inside a single object.
This makes the code easier to manage and scale.
*/

const smartPhone = {
  // Properties (data)
  brand: "Samsung",
  model: "Galaxy S21",
  price: 180000,
  isAvailable: true,

  // ==================================================
  // 2. METHOD – OBJECT BEHAVIOR
  // ==================================================

  /*
  A method is a function that belongs to an object.
  It can access the object's own properties using `this`.
  */
  showPrice: function () {
    console.log(
      `The price of ${this.brand} ${this.model} is ${this.price} rupees.`
    );
  },

  /*
  This method checks availability status.
  */
  checkAvailability: function () {
    if (this.isAvailable) {
      console.log(`${this.brand} ${this.model} is available in stock.`);
    } else {
      console.log(`${this.brand} ${this.model} is currently out of stock.`);
    }
  }
};

// ==================================================
// 3. ACCESSING OBJECT DATA
// ==================================================

/*
Dot notation is the most common way to access
object properties and methods.
*/

console.log("Brand:", smartPhone.brand);
console.log("Model:", smartPhone.model);

// ==================================================
// 4. CALLING OBJECT METHODS
// ==================================================

smartPhone.showPrice();
smartPhone.checkAvailability();

// ==================================================
// 5. UPDATING OBJECT PROPERTIES
// ==================================================

/*
Objects are mutable, meaning their properties
can be changed after creation.
*/

smartPhone.price = 175000;
smartPhone.isAvailable = false;

console.log("\nAfter updating values:\n");

smartPhone.showPrice();
smartPhone.checkAvailability();

// ==================================================
// 6. WHY `this` IS IMPORTANT
// ==================================================

/*
The `this` keyword refers to the object that
is calling the method.

If we remove `this`, the method would not know
which object's data to use.
*/   
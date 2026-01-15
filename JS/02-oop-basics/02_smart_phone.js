/*
|--------------------------------------------------------------------------
| DAY 2 – CONSTRUCTOR FUNCTIONS & THE `new` KEYWORD
|--------------------------------------------------------------------------
| Repository: frontend-development
| Author: Mudasir Razvi
|
| Focus:
| - Constructor Functions (Blueprints / Factories)
| - new Keyword (Object Creation Logic)
| - Scalable Object Creation
| - Real-world Modeling
|--------------------------------------------------------------------------
*/

/*
|--------------------------------------------------------------------------
| PRACTICE 1: BASIC CONSTRUCTOR (LAPTOP BLUEPRINT)
|--------------------------------------------------------------------------
*/
function Laptop(brand, ram, processor) {
    this.brand = brand;
    this.ram = ram;
    this.processor = processor;

    this.showSpecs = function () {
        console.log(
            `Laptop: ${this.brand} | RAM: ${this.ram} | Processor: ${this.processor}`
        );
    };
}

// Creating objects using the same blueprint
const hpLaptop = new Laptop("HP", "8GB", "Intel i5");
const dellLaptop = new Laptop("Dell", "16GB", "Intel i7");

hpLaptop.showSpecs();
dellLaptop.showSpecs();

/*
|--------------------------------------------------------------------------
| PRACTICE 2: SCALING – MULTIPLE OBJECTS FROM ONE BLUEPRINT
|--------------------------------------------------------------------------
*/
const laptopInventory = [
    new Laptop("Lenovo", "8GB", "Ryzen 5"),
    new Laptop("Asus", "16GB", "Intel i7"),
    new Laptop("Acer", "8GB", "Intel i3"),
    new Laptop("Apple", "16GB", "M1")
];

for (let i = 0; i < laptopInventory.length; i++) {
    laptopInventory[i].showSpecs();
}

/*
|--------------------------------------------------------------------------
| PRACTICE 3: ADDING LOGIC INSIDE OBJECTS
|--------------------------------------------------------------------------
*/
function SmartLaptop(brand, ram) {
    this.brand = brand;
    this.ram = ram;

    this.isGoodForDevelopment = function () {
        if (parseInt(this.ram) >= 16) {
            console.log(`${this.brand} is good for professional development.`);
        } else {
            console.log(`${this.brand} is suitable for basic tasks.`);
        }
    };
}

const macbook = new SmartLaptop("Apple", "16GB");
const budgetLaptop = new SmartLaptop("HP", "8GB");

macbook.isGoodForDevelopment();
budgetLaptop.isGoodForDevelopment();

/*
|--------------------------------------------------------------------------
| PRACTICE 4: REAL-WORLD FACTORY (PRODUCT SYSTEM)
|--------------------------------------------------------------------------
*/
function Product(name, price, stock) {
    this.name = name;
    this.price = price;
    this.stock = stock;

    this.buy = function (quantity) {
        if (quantity <= this.stock) {
            this.stock -= quantity;
            console.log(`${quantity} ${this.name}(s) purchased.`);
        } else {
            console.log(`Not enough stock for ${this.name}.`);
        }
    };
}

const laptopProduct = new Product("Laptop", 150000, 5);
laptopProduct.buy(2);
laptopProduct.buy(4);

/*
|--------------------------------------------------------------------------
| PRACTICE 5: USER MANAGEMENT SYSTEM
|--------------------------------------------------------------------------
*/
function User(name, email, role) {
    this.name = name;
    this.email = email;
    this.role = role;

    this.getInfo = function () {
        console.log(`${this.name} | ${this.role} | ${this.email}`);
    };
}

const adminUser = new User("Bilal", "admin@mail.com", "Admin");
const customerUser = new User("Sara", "sara@mail.com", "Customer");

adminUser.getInfo();
customerUser.getInfo();

/*
|--------------------------------------------------------------------------
| PRACTICE 6: COMMON MISTAKE – FORGETTING `new`
|--------------------------------------------------------------------------
*/
function Car(brand) {
    this.brand = brand;
}

// Wrong usage (no new)
const car1 = Car("Toyota");
console.log(car1); // undefined

// Correct usage
const car2 = new Car("Honda");
console.log(car2.brand);

/*
|--------------------------------------------------------------------------
| PRACTICE 7: VALIDATION INSIDE CONSTRUCTOR
|--------------------------------------------------------------------------
*/
function SecureLaptop(brand, ram) {
    if (!brand || !ram) {
        console.log("Invalid laptop data provided.");
        return;
    }

    this.brand = brand;
    this.ram = ram;

    this.display = function () {
        console.log(`${this.brand} with ${this.ram} RAM`);
    };
}

const validLaptop = new SecureLaptop("Dell", "16GB");
const invalidLaptop = new SecureLaptop("", "8GB");

validLaptop.display();

/*
|--------------------------------------------------------------------------
| PRACTICE 8: MASS OBJECT GENERATION (FACTORY THINKING)
|--------------------------------------------------------------------------
*/
function InventoryItem(name, quantity) {
    this.name = name;
    this.quantity = quantity;
}

const inventory = [];

for (let i = 1; i <= 5; i++) {
    inventory.push(new InventoryItem(`Item ${i}`, i * 10));
}

console.log(inventory);
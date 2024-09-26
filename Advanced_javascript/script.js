// Global scope variable
var globalVar = "I am global";

// Function demonstrating local scope and block scoping (let/const)
function scopeTest() {
    let localVar = "I am local";
    console.log(localVar); // Logs: "I am local"
    
    if (true) {
        let blockScopedVar = "I am block scoped";
        console.log(blockScopedVar); // Logs: "I am block scoped"
    }
    
    // This will throw an error because blockScopedVar is not accessible here
    // console.log(blockScopedVar);
}

scopeTest();

// Difference between let and const
let mutableValue = "Initial value";
console.log(mutableValue); // Logs: "Initial value"
mutableValue = "Changed value";
console.log(mutableValue); // Logs: "Changed value"

const constantValue = "Cannot change this";
// Uncommenting the following line would cause an error
// constantValue = "Try to change"; 

// Arrow functions
const add = (a, b) => a + b;
console.log(`Arrow function result: ${add(2, 3)}`); // Logs: 5

// Object for demo purposes
const person = {
    name: "Johny Rex",
    age: 25,
    greet() {
        return `Hello, my name is ${this.name}`;
    }
};

// Function to process input numbers
function processNumbers() {
    const input = document.getElementById('numberInput').value;

    // Convert input string to an array of numbers
    const numbers = input.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));

    if (numbers.length === 0) {
        alert("Please enter valid numbers!");
        return;
    }

    // Apply ES6 features on the numbers array
    const doubled = numbers.map(num => num * 2);
    const evens = numbers.filter(num => num % 2 === 0);
    const sum = numbers.reduce((total, num) => total + num, 0);

    // Update the HTML elements with results
    document.getElementById('doubled').textContent = `Doubled Array: ${doubled.join(', ')}`;
    document.getElementById('evens').textContent = `Even Numbers: ${evens.join(', ')}`;
    document.getElementById('sum').textContent = `Sum of Array Elements: ${sum}`;
    document.getElementById('greet').textContent = person.greet();
}

// Add event listener to the button
document.getElementById('processBtn').addEventListener('click', processNumbers);

// Display the initial scope and object manipulations
document.getElementById('output').innerHTML += `
    <p>Global Variable: ${globalVar}</p>
    <p>Scope Test Output: Check the console for local and block-scoped variable outputs.</p>
    <p>Let vs Const Test: Check the console for mutable and constant value outputs.</p>
    <p>Arrow Function Test: Check the console for the result of the arrow function.</p>
    <p>Object Manipulation: ${person.greet()}</p>
`;

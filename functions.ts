// Function declaration
function add(a: number, b: number): number {
  return a + b;
}

// Function expression
const subtract = function(a: number, b: number): number {
  return a - b;
};

// Arrow function
const multiply = (a: number, b: number): number => {
  return a * b;
};

// Function with optional parameter
function greet(name: string, greeting?: string): string {
    if (greeting) {
        return `${greeting}, ${name}!`;
    }
    return `Hello, ${name}!`;
}

// Function with default parameter
function power(base: number, exponent: number = 2): number {
    return Math.pow(base, exponent);
}

// Function with rest parameter
function sumAll(...numbers: number[]): number {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

// Function that returns void
function logMessage(message: string): void {
    console.log(message);
}

// Type Guards and Narrowing
function printValue(value: string | number) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

function processValue(value: string | number | null) {
    if (value == null) {
        console.log("Value is null or undefined");
    } else if (typeof value === "string") {
        console.log(value.toLowerCase());
    } else {
        console.log(value * 2);
    }
}

function isString(value: any): value is string {
    return typeof value === "string";
}

function processValue2(value: string | number) {
    if (isString(value)) {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}

interface Circle {
    kind: "circle";
    radius: number;
}

interface Square {
    kind: "square";
    side: number;
}

type Shape = Circle | Square;

function calculateArea(shape: Shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    } else {
        return shape.side ** 2;
    }
}

// Example usage
console.log(add(5, 3));
console.log(subtract(10, 4));
console.log(multiply(2, 6));
console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));
console.log(power(3));
console.log(power(2, 3));
console.log(sumAll(1, 2, 3, 4));
logMessage("This is a log message");
printValue("hello");
printValue(123);
processValue("WORLD");
processValue(null);
processValue(5);
processValue2("test");
processValue2(10);
console.log(calculateArea({ kind: "circle", radius: 5 }));
console.log(calculateArea({ kind: "square", side: 5 }));

// Interfaces in TypeScript
// Interfaces are a way to define contracts for objects. They specify the properties and methods that an object must have.
// Interfaces can be implemented by classes or used to define the shape of an object.

interface Person {
  name: string;
  age: number;
}

// Example of an object that satisfies the Person interface
const person1: Person = {
  name: "John Doe",
  age: 30,
};

// Example of a class that implements the Person interface
class Employee implements Person {
  name: string;
  age: number;
  employeeId: string;

  constructor(name: string, age: number, employeeId: string) {
    this.name = name;
    this.age = age;
    this.employeeId = employeeId;
  }

  greet(message: string): void {
    console.log(`${message}, my name is ${this.name} and my employee ID is ${this.employeeId}`);
  }
}

const employee1 = new Employee("Jane Smith", 25, "12345");
employee1.greet("Hi");

// Type Aliases in TypeScript
// Type aliases are a way to give a name to a type. They can be used to create more descriptive names for complex types.
// Type aliases do not create a new type, they simply give a name to an existing type.

type Point = {
  x: number;
  y: number;
};

const point1: Point = { x: 10, y: 20 };

const value1 = "hello";
const value2 = 123;

type Callback = (data: string) => void;

function fetchData(callback: Callback) {
  // Simulate fetching data
  setTimeout(() => {
    callback("Data fetched!");
  }, 1000);
}

fetchData((data) => console.log(data));

// Key Differences between Interfaces and Type Aliases
// 1. Interfaces can be implemented by classes, while type aliases cannot.
// 2. Interfaces can be extended using the extends keyword, while type aliases can be extended using intersection types (&).
// 3. Interfaces can be merged (declaration merging), while type aliases cannot.
// 4. Type aliases can be used for primitive types, unions, and tuples, while interfaces are typically used for object types.

// More details on Interfaces
// Extending Interfaces
// Interfaces can be extended using the extends keyword to create new interfaces that inherit properties and methods from existing interfaces.

interface Circle {
  radius: number;
}

// Declaration Merging
// Interfaces with the same name in the same scope are merged by the compiler. This is called declaration merging.
// This allows you to add new properties and methods to an existing interface.
interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const animal1: Animal = { name: "Dog", age: 5 };

// More details on Type Aliases
// Intersection Types
// Type aliases can be extended using intersection types (&) to create new types that combine the properties of multiple types.
type Point2D = {
  x: number;
  y: number;
};

type Point3D = Point2D & {
  z: number;
};

const point3d: Point3D = { x: 10, y: 20, z: 30 };

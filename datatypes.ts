// In TypeScript, we have several built-in datatypes:

// 1. Boolean
// Represents true or false values
let isDone: boolean = false;
let isEnabled: boolean = true;

// 2. Number
// Represents numeric values, both integers and floating-point numbers
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// 3. String
// Represents textual data
let color: string = "blue";
let fullName: string = `John Doe`;

// 4. Array
// Represents collections of values of the same type
let list: number[] = [1, 2, 3];
let colors: string[] = ["red", "green", "blue"];
let genericList: Array<number> = [4, 5, 6];

// 5. Tuple
// Represents an array with a fixed number of elements of different types
let person: [string, number] = ["John", 30];

// 6. Enum
// Represents a set of named constants
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// 7. Any
// Represents a value that can be of any type
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

// 8. Void
// Represents the absence of a type, often used for functions that don't return a value
function warnUser(): void {
    console.log("This is a warning message");
}

// 9. Null and Undefined
// Represents null and undefined values
let u: undefined = undefined;
let n: null = null;

// 10. Never
// Represents the type of values that never occur
function error(message: string): never {
    throw new Error(message);
}

// 11. Object
// Represents non-primitive types
let obj: object = {name: "John", age: 30};

// 12. Type Assertions
// Allows you to override the type inferred by TypeScript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
let strLength2: number = (<string>someValue).length;

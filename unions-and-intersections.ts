// Union type
let code: string | number;
code = "123";
code = 123;

function printId(id: string | number) {
    console.log(`ID: ${id}`);
}

printId("abc");
printId(456);

// Intersection type
interface Colorful {
    color: string;
}

interface Circle {
    radius: number;
}

type ColorfulCircle = Colorful & Circle;

const colorfulCircle: ColorfulCircle = {
    color: "red",
    radius: 10,
};

console.log(colorfulCircle);

interface Person {
    name: string;
    age: number;
}

interface Employee {
    company: string;
    position: string;
}


// Example of a function that accepts a union type
function processInput(input: string | number | boolean): void {
    if (typeof input === 'string') {
        console.log(`Input is a string: ${input}`);
    } else if (typeof input === 'number') {
        console.log(`Input is a number: ${input}`);
    } else if (typeof input === 'boolean') {
        console.log(`Input is a boolean: ${input}`);
    }
}

processInput("hello");
processInput(123);
processInput(true);

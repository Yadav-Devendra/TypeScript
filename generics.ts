// Generics allow you to write code that can work with different types.
// They provide a way to make components reusable while maintaining type safety.

// Example 1: A generic function
function identity<T>(arg: T): T {
  return arg;
}

let myString: string = identity<string>("hello");
let myNumber: number = identity<number>(123);
let myBool: boolean = identity<boolean>(true);

console.log(myString);
console.log(myNumber);
console.log(myBool);

// Example 2: A generic interface
interface Box<T> {
  value: T;
}

let stringBox: Box<string> = { value: "world" };
let numberBox: Box<number> = { value: 456 };

console.log(stringBox.value);
console.log(numberBox.value);

// Example 3: A generic class
class Container<T> {
  constructor(public items: T[]) {}

  addItem(item: T): void {
    this.items.push(item);
  }

  getItems(): T[] {
    return this.items;
  }
}

let stringContainer = new Container<string>(["a", "b"]);
stringContainer.addItem("c");
console.log(stringContainer.getItems());

let numberContainer = new Container<number>([1, 2]);
numberContainer.addItem(3);
console.log(numberContainer.getItems());

// Mapped Types
type ReadonlyProperties<T> = {
    readonly [P in keyof T]: T[P];
};

interface Person {
    name: string;
    age: number;
}

type ReadonlyPerson = ReadonlyProperties<Person>;

type OptionalProperties<T> = {
    [P in keyof T]?: T[P];
};

type OptionalPerson = OptionalProperties<Person>;

type NullableProperties<T> = {
    [P in keyof T]: T[P] | null;
};

type NullablePerson = NullableProperties<Person>;

// Conditional Types
type StringOrNumber<T> = T extends string ? string : number;

type StringOnly = StringOrNumber<string>;
type NumberOnly = StringOrNumber<number>;
type BooleanOnly = StringOrNumber<boolean>;

type NonNullableType<T> = T extends null | undefined ? never : T;

type NotNullableString = NonNullableType<string | null | undefined>;
type NotNullableNumber = NonNullableType<number>;

type ExtractType<T, U> = T extends U ? T : never;

type ExtractString = ExtractType<string | number, string>;
type ExtractNumber = ExtractType<string | number, number>;
type ExtractBoolean = ExtractType<string | number, boolean>;

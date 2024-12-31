// Utility Types (Partial, Pick, Record, etc.)

// Partial<T>: Makes all properties in T optional
interface User {
    id: number;
    name: string;
    email: string;
}

type PartialUser = Partial<User>;

// Pick<T, K>: Constructs a type by picking properties K from T
type UserIDName = Pick<User, 'id' | 'name'>;

// Record<K, T>: Constructs a type with property keys K and value type T
type UserRecord = Record<string, User>;

// Readonly<T>: Makes all properties in T readonly
type ReadonlyUser = Readonly<User>;

// Required<T>: Makes all properties in T required
type RequiredUser = Required<PartialUser>;

// Omit<T, K>: Constructs a type by omitting properties K from T
type UserWithoutEmail = Omit<User, 'email'>;

// Exclude<T, U>: Excludes from T all properties that are assignable to U

// Extract<T, U>: Extracts from T all properties that are assignable to U

// NonNullable<T>: Excludes null and undefined from T
type NullableString = string | null | undefined;
type NonNullableString = NonNullable<NullableString>;

// Parameters<T>: Constructs a tuple type from the types used in the parameters of a function type T
type MyFunction = (a: number, b: string) => void;
type FunctionParams = Parameters<MyFunction>;

// ReturnType<T>: Constructs a type from the return type of a function type T
type FunctionReturnType = ReturnType<MyFunction>;

// InstanceType<T>: Constructs a type from the instance type of a constructor function type T
class MyClass {
    constructor(public x: number) {}
}
type ClassInstance = InstanceType<typeof MyClass>;

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

interface Person {
  name: string;
  age: number;
}

let person: Person;

person = {
  name: 'Max',
  age: 32,
};

let people: Person[];

people = [
  { name: 'Max', age: 32 },
  { name: 'Min', age: 14 },
];

// Functions & types

function add(a: number, b: number) {
  return a + b;
}

function printOutput(value: any) {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]

updatedArray[0].split('');
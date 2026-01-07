const myName: string = "Huy";
const myAge: number = 21;
const isStudent: boolean = true;

console.log(`Name: ${myName}, Age: ${myAge}, Is Student: ${isStudent}`);

let count = 10;

console.log("Count:", count);

let person :{ name: string; age: number; isStudent: boolean } = {
    name: "Huy",
    age: 21,
    isStudent: true
};

console.log(person);

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["Apple", "Banana", "Cherry"];

console.log("Numbers:", numbers);
console.log("Fruits:", fruits); 

let score: Array<number> = [90, 85, 88];
console.log("Scores:", score);
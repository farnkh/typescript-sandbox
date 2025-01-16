// Primitive Types
let id: number = 5; // (float, int)
let company: string = "Ford";
let isTrue: boolean = false;


// Collections
let ids: number[] = [2,3,4,5];

// Any
let x: any;  // not a great idea
x = "dsa";
x = 90;
x.toUpperCase();  // ERROR, wont check/complain

let y: any = "some string";
let xArr: any[] = [1, "here", false];
let foundItem; // any
let betterFoundItem: string;  // better



// Symbol
let s1: symbol = Symbol("one");
let s2: symbol = Symbol("one");

console.log(s1===s2); // false
console.log(s1==s2); // false


// Type Inference
let thisIsAString = "string stuff";



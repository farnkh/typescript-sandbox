// Give a value mutliple possible types
let age: number | string = 24;
age = "none of your business";  // okay


type Point = {
    x: number,
    y: number,
};

type Loc = {
    lat: number,
    long: number,
};

let coordinates: Point | Loc;


//
// Union Types and Functions
function printAge(age: string|number){
    console.log(`You are ${age}`);
}
printAge(23);
printAge("45");

function calcTax(price: number | string, tax: number){
    // type narrowing
    // dont like this way of checking type against a string
    if(typeof price === "string")
        return parseFloat(price) * tax;
    else if(typeof price === "number")
        return price * tax;
}

//
// Union Types and Arrays
// DONT FORGET ()
const stuff: (number|string)[] = ["this", 23];

//
// Literal Types
let zero: 0 = 0;
let hi: "HI" = "HI";
// WRONG zero=9;

let yn: "yes"|"no" = "no";
yn="yes"; // OKAY
// yn="maybe" WRONG


// Example
type DayofWeek = "Mon" | "Tues" | "Wed" | 0;  // NOTE CAN BE ANYTYPE JUST THESE TYPES
let day: DayofWeek = "Mon";





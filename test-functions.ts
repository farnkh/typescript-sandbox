
// Function Params
function sq(num: number){
    return num*num;
}


sq(3);
console.log(sq(3));


function lg(val: string | number){
    console.log(val);
}


const lgFunc = (val: string) =>{
    console.log(val);
}


console.log(lgFunc);
lgFunc("Const log function");


lg(9);
lg("this");




// Default Vaues
const doSomething = (person: string = "Doe, John", age: number = 0) =>{
    return `Hi there, ${person}`;
}
console.log(doSomething());
console.log(doSomething("Jane", 10));

//
// Return Types
function addNums(a: number, b: number): number{
    return a + b;
}

// Arrow function
const funcAddNum = (a: number, b:number):number => {
    return a+b;
}

//
// Annoymous Functions
const colors = ["RED", "blue", "green"];
const lowerCaseColors = colors.map((color:string, index:number)=>{
    return color.toLowerCase() + index.toString();
});
console.log(lowerCaseColors);

// 
// Never
//A function that will never stop executing
const neverStop = ():never => {
    while(true){
        console.log(".");
    } 
}




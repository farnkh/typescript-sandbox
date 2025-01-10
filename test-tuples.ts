//
// Tuples
// Array type with a fixed set of types
let myTuple: [number, string];
myTuple = [1, "One"];
const rgb: [number, number, number] = [100, 200,100];


//
// A bit more on tuples
type HttpResponse = [number, string];

const good:HttpResponse=[200, "Okay"];
const error:HttpResponse=[400, "Error"];
const r: HttpResponse=[500, "Internal Error"];

error[0]=404;  // OKAY

// Note: Wont complain about this, known limitation
error.push("WOW"); 
error.pop();
error.pop();   // Unfortunate..



// Me playing around
let t: [number|string, number|string];
t=[1,1];
t=["one", "one"];




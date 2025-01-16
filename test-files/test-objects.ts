// Objects
const person = {
    name: "Joe",
    age: 50
};

//function with object
const printPerson = (person: {first: string, last: string})=>{
    console.log(person.first, person.last);
}

printPerson({first: "Frank", last: "Something"});

/// Another annotation
let coordinate: {x:number, y:number} = {x: 32, y: 3};


// Excess Properties
//printPerson({first:"Mike", last:"Jones", age: 90})  /// wont work
const mJones = {first:"Mike", last:"Jones", age: 90, isAlive: true};
printPerson(mJones);  // WONT COMPLAIN

// Type Aliases
type Person ={
    name: string,
    age: number
};

const mike:Person ={
    name: "Mike", age:90
};

const sam:Person = {name: "Sam", age:100};

//
// Can be a primitive type
type MyNumber =number;
const j:MyNumber = 100;

//
// Nested Objects
type Song ={
    title: string,
    artist: string,
    credits:{
        producer: string
    }
}

const s: Song = {title: "sada", artist: "asdas", credits:{ producer: "dsad"}};

function getProducer(song: Song): string{
    return song.credits.producer
}

//
// Optional Properties
type Points ={
    x:number, y:number, z?:number
};

const myP:Points = {x:100, y:200};


//
// Readonly Modifier
type User = {
    readonly id: number,
    username: string
};

// OK
const user: User ={
    id:100,
    username: "admin"
};

//user.id = 101; // WRONG



//
// Intersection Types
type Circle ={
    radius: number
};

type ColorFul = {
    color: string
}

// both (can be done ith interfaces as well)
type ColorfulCircle = Circle & ColorFul;



type Cat ={
    numLives: number
}

type Dog = {
    breed: string
}


// Intersetion but I also want to add on age
type CatDog = Cat & Dog & {
    age: number;
}

const cg:CatDog = {
    numLives:9,
    breed: "hybrid",
    age: 100
};



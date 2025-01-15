//
// Interfaces (describe objects)
// NO EQUAL SIGN LIKE TYPES
interface Animal {
    name: string,
    age: number,
    type?: string,
};


const dog:Animal = {name: "buddy", age: 11};
   dog.age = 12

interface PointXY {
    readonly id: number,
    x: number,
    y: number,
    z?: number,
}

let p: PointXY = {id:1, x:100, y:100}

interface Animal_ {
    name: string,
    age: number,
    type?: string,
    speak: ()=> string;
    // alternative way speak(): string,
};

const doggy:Animal_ = {
    name: "fido",
    age: 3,
    speak: ()=> "bark bark",
}

console.log(doggy.speak());


interface Product {
    name: string,
    price: number,
    applyDiscount(discount:number): number,
}

const shoes: Product ={
    name: "red shoes",
    price: 100,
    applyDiscount(amount: number){
        let newPrice =  this.price * amount;
        this.price = newPrice;
        return newPrice;
    }
}

// re-open interface (combine)
interface A {
    Astring: string;
}

interface A {
    Bstring: string;
}

const testAInterface: A ={
    Astring: "here",
    Bstring: "there"
}


// Extend interface
interface ServiceDog extends Dog {
    job?: string
}

const chewy: ServiceDog = {
    breed: "lab",
    job:"drug sniffer"
}

//
// Can extend multiple interfaces
// interface Engineer extends Person, Employee {}
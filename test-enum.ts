//
// Enums

// Numeric
enum Responses {
    NO, // NOTE, DEFAULT STARTS WITH 1 (NOT 0)  If set to 10, subsequent values 11, 12, 13
    YES, //2
    MAYBE //3
};

enum HybridResponse {
    NO = 0,
    YES = 1,
    MAYBE = "maybe"
};


enum StringResponses {
    "no",
    "yes",
    "maybe"
};

// Playing around
const u: Responses | StringResponses =  Responses.NO;


//
// Enums dont exists in javascript, results in additional code
// use typescriptplayground to see.  Some people dont like this.

// Other options: adding const just uses the numbers

// The big things, enums all auto compete, could just use type
const enum OrderStatus{
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED
}

type TypeOrderStatus = "PENDING"|"SHIPPED"|"DELIVERD";
const ObjectOrderStatus = {
    "PENDING": 1,
    "SHIPPED": 2
};






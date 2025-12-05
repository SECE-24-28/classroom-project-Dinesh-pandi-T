// console.log(a);
// //hosting
// var a = 10;
// //global scope/Function scope
// console.log(a);

// //ES6
// //let and const
// //console.log(b)
// //reference
// //temporal Dead Zone
// let b = 20;
// b=130;
// //Block scope
// console.log(b);

// // {
// //     let b = 30;
// //     console.log(b);
// // }
// console.log(c);

// const c = 40;
//  c=70;

//  console.log(c);

//Functions
//1.Named Function
//Function decalaration
function namedFunc(){
    console.log("NamedFunction Called");
    console.log("NamedFunction Called");
    console.log("NamedFunction Called");
}

//Function call/Invoaktion
namedFunc();
// funcExp()
//2.Function Expression

let funcExp = function(){
    console.log("Function Expression called");
}
funcExp();

//3.Arrow Function(ES6)
let arrow=()=>{
    console.log("Arrow Function called");
};

arrow();

//4.callback Function and 5. IIFE(Immediately invoked function Expression)

(()=>{
    console.log("callback and iife Function called");
}
)();


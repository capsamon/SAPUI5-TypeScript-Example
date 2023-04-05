//Create all variables and type them accordingly.
//More info on variables and typings can be found here:
//https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
const myName: string;
const myAge;
const iAmDeveloper;


//Create an object of your variables and inspect their values
//Also play around with let and const, understand what the difference between the 2 is
const ASMLDeveloper;


//Create a predefined array and type is accordingly
const sapDevelopers;


//What is the difference between these 3 definitions, and when do you use them?
let thisCanBeAnything: any; 
let thisIsVoid: void; 
let thisIsNever: never; 


//What is the issue here, and how do we fix it?
const ASMLMachine = {
    name: "NXT 500",
    equipmentsUsed: [
        "Belt",
        "Screw",
        "Things"
    ]
}
ASMLMachine.equipmentsUsed.push(1);
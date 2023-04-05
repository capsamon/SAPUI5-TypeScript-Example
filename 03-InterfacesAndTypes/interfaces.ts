//Create a basic interface and/or type we can use to type our ASMLMachine accordingly, without writing it out everytime.
interface ASMLMachine {
    //Properties go here
}

type ASMLMachineType = {
    //Properties go here
}

const ASMLMachine = {
    name: "NXT 500",
    equipmentsUsed: [
        "Belt",
        "Screw",
        "Things"
    ]
}


//Now use the above interface to type the below object accordingly, so the errors dissapear.
//Try and make your type as strict as possible!
let thisIsAlsoAnASMLMachine;
thisIsAlsoAnASMLMachine.equipmentsUsed.push("ServiceItem1");
thisIsAlsoAnASMLMachine.name = "NXT 400";


//This way we can 'extend' type definitions
type PartialPointX1 = { x: number; };
type Point1 = PartialPointX1 & { y: number; };

//Versus extending interface definitions
interface PartialPointX2 { x: number; }
interface Point2 extends PartialPointX2 { y: number; }
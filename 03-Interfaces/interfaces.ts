//Create a basic interface we can use to type our ASMLMachine accordingly, without typing it out everytime.
interface ASMLMachine {
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
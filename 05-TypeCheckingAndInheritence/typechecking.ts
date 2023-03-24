//When using typescript in combination with SAPUI5, you will often need to check for specific types before handling objects.
//The bad way to do this is by using the "as" keyword, though you have another option available, which is more explicit.
//Try and fix below code;
interface Equipment {
    name: string,
    identifier: string,
    amount: number
}

interface ASMLMachine {
    identifying12NC: string;
    machineName: string;
    equipmentList: Array<Equipment>;
    creationDate: Date;

    getFullName: () => string;
    getCreationDateInISO : () => string;
}


//Inspect the type of "incomingASMLMachine" on this line, and see if it can be an ASML machine or not.
//If not, try and fix the code
let incomingASMLMachine = {
    identifying12NC: "4022.123.12545",
    machineName: "NXT 500",
    equipmentList: ["Screws", "Objects"],
    creationDate: new Date()
}


//This is the definition of a possible type checking function.
//It checks by a specific set of rules if they apply, and if so, you can tell the compiler that something is of a certain type
const isValidASMLMachine = (incomingObjectFromService: any) : incomingObjectFromService is ASMLMachine => {
    return incomingObjectFromService.getFullName && incomingObjectFromService.getCreationDateInISO && !!incomingObjectFromService.identifying12NC;
}

//This is how we can check a specific type, and tell the compiler it is true or not
if(!isValidASMLMachine(incomingASMLMachine)){
    throw new Error("This is not a correct ASML machine!");
}

//Why does this now work? Is this correct?
incomingASMLMachine.getFullName();
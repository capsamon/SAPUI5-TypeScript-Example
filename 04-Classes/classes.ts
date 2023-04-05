//Classes can implement types, like so;
type Point2 = {
    x: number;
    y: number;
};

class SomePoint2 implements Point2 {
    x = 1;
    y = 2;
}


//Classes have constructors and can have functions available.
//Below is an example class, try to fix the code.
class ASMLMachine {
    identifying12NC;
    machineName;
    equipmentList;
    creationDate: number;

    constructor(identifying12NC, machineName, equipmentList, creationDate) {
        this.identifying12NC = identifying12NC;
        this.machineName = machineName;
        this.equipmentList = equipmentList;
        this.creationDate = creationDate;
    }

    private getFullName() {
        return `${this.machineName} - ${this.identifying12NC}`;
    }

    public getCreationDateInISO() {
        return `${this.creationDate.toISOString()}`;
    }
}

let incomingASMLMachine = new ASMLMachine(171280926, 'NXT 500', [{name: "Screws", amount: 12, identifier: "4022.123.12356"}], "25");
console.log(incomingASMLMachine.getFullName());
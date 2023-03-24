//Create an object that has 3 functions that can be called on it.
const ASMLMachine = {
    name: "NXT 500",
    equipmentsUsed: [
        "Belt",
        "Screw",
        "Things"
    ]
};


//What is going wrong here? Fix all errors.
let greetingAnonymous : (name: string) => string;
greetingAnonymous = function (name: string) {
    console.log(`Hello ${name}`);
};
greetingAnonymous();


//Most SAPUI5 functions return void. In the example below, we want to return a boolean.
//Are you familiar with async functions? Try and fix the code.
let setPropertiesOnModel : (odata: Array<{ "amountOfOrders": 1 | 2 }>, makeThisOptional: string) => Promise<void>;

setPropertiesOnModel = async function(odata) {
    const model = {
        setData: () => {
            return true;
        }
    }
    const settingDataToModelSucceeded = model.setData(odata[0].amountOfOrders);
    return settingDataToModelSucceeded;
}

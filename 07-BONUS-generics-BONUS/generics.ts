//When we want to create a function, we normally set it up like so:
function identityFunction1(arg: string): string {
    return arg;
}
const outcomeOfService1 = identityFunction1("TypedString");

//If we would want to make the parameter(s) of this function 'generic', we could write it like this:
function identityFunction2(arg: any): any {
    return arg;
}

//This is indeed a form of generic usage of parameters, though if the function gets used, it will lose all parameter typing.
//In the below case, if we hover over the outcomeOfService2 variable, we see that it has type 'any'.
const outcomeOfService2 = identityFunction2("TypedString");

//To prevent this behaviour, we want to use generics in our function parameters.
//In this case we can see (if we hover over the outcomeOfService3 variable) that the type of the ingoing parameter remains
function identityFunction3<Type>(arg: Type): Type {
    return arg;
}
const outcomeOfService3 = identityFunction3("TypedString");

//We can also tell the compiler which type we are passing, if we want to 'overrule' it, like so;
const outcomeOfService4 = identityFunction3<string>("TypedString");

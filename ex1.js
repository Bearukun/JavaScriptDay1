//Method to add two numbers together
function add(n1, n2) {

    return n1 + n2;

}

//Method to substract to numbers from each other,a that gets saved into the variable sub
var sub = function sub(n1, n2) {

    return n1 - n2;

};


//Variable cb, that is set equal to the function that takes two numbers and a callback. 
var cb = function (n1, n2, callback) {

    if (!(typeof n1 === "number" && typeof n2 === "number" && typeof callback === "function")) {

        //return null;
        throw Error("Illegal arguments in call to function");

    }

    return "Result from the two numbers: " + n1 + " + " + n2 + " = " + callback(n1, n2);

};

//Let's try to get an error
try {

    //Call cb with only one number, and the method add as a function
    console.log(cb(33, add));

} catch (err) {
    
    console.log("Error: " + err.message);

}

console.log(cb(3, 3, add));
console.log(cb(3, 3, sub));
console.log(cb(5, 5, function (n1, n2) {
    return n1 * n2;
}));





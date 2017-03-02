//function Person(name) {
//    this.name = name;
//    var self = this;
//    console.log("Name: " + this.name);
//    setTimeout(function () {
//        console.log("Hi  " + self.name);  //Explain this
//    }, 2000);
//}


//Capitalised is used for a constructor
function Person(name) {
    this.name = name;
    
    console.log("Name: " + this.name);
    setTimeout(function () {
        console.log("Hi  " + this.name);  //Explain this
    }.bind(this), 2000);
}



//call it like this (do it, even if you know it’s silly ;-)
 var p = new Person("Kurt Wonnegut");  //This calls the function
console.log("I'm global: " + p.name);  //Explain this
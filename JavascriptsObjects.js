var random = [
    
    {firstName: "Benny", lastName:"Hansen", age: 45, city: "København"},  
    {firstName: "Ida", lastName:"Nilsen", age: 23, city: "Amager"},  
    {firstName: "Johanne", lastName:"Smidth", age: 39, city: "København"},  
    {firstName: "Ole", lastName:"Andersen", age: 65, city: "Aalborg"}  
    
];

console.log(random);

//For-in
for(x in random){
    
  console.log(random[x].firstName);
  
};

//Delete
for(x in random){
    
  delete random[x].city;
  
};

console.log(random);

//Add property
for(x in random){
    
  random[x].country = "Denmark";
  
};

console.log(random);

//Constructor

function Person(firstName, lastName, age){
    
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    
}

//Method to get details
function getPerson(Person){
    
    console.log(Person.firstName + " " + Person.lastName + " " + Person.age);
    
};

var person = new Person('Benny', 'Hansen', 29);

getPerson(person);

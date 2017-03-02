//Object
var name = {firstName: "Kurt", lastName: "Wonnegut"};

//Function
function nameFactory(){
    
    return {firstName: "Kurt", lastName: "Wonnegut", phone: "28374666"};
    
}

//Don't do this
//var names = ["Benny", "Hanne", "Britta", "Birger", "Ulla"];
//names.phone = "84746473";
//console.log(names.phone);


var n = nameFactory();

for(prop in n){
    
    console.log(prop, n[prop]);
    
}



n.phone = "82792020";

console.log(n.firstName,n.lastName, n.phone);
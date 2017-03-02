var names = ["Benny", "Hanne", "Britta", "Birger", "Ulla"];

for(var i = 0; i < names.length; i++){
    
    console.log(names[i]);
    
}

names.forEach(function(name){
    
  console.log(name);  
    
});

var filtered = names.filter(function(name){
    
   return name[0] === "B"; 
    
});

console.log(filtered);

names = names.map(function(name){
    
   return "<li>"+name+"</li>";
     
    
});

var lis = "<ul>" + names.join("") + "</ul>";

console.log(lis);

//Asyncron DEMO
//
//setTimeout(function(){
//    
//   console.log("Hello"); 
//    
//},1000);
//
//console.log("hi");


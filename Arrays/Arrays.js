//Concat the 2 arrrays to 1
var boys = ["Peter", "Lars", "Ole"];
var girls = ["Janne", "hanne", "Sanne"];
var all = boys.concat(girls);
 
console.log(all);
 
 
//Join the Array to 1 String
var allJoin = all.join(",");
console.log(allJoin);
 
//Replace , with -
var complete = all.join("-");
 
console.log(complete);
 
//Add to the end of the Array
//Returns the amount of objects in the array
var allPush = all.push("Lone", "Gitte");
console.log(allPush.toLocaleString());
 
//To show the content, use:
console.log(all);
 
//Add to the beginning of the Array
var allUnShift = all.unshift("Hans", "Kurt");
console.log(allUnShift);
 
 
//Remove from the beginning of the Array
var allShift = all.shift();
console.log(all);
 
//Remove from the endof the Array
var allPop = all.pop();
console.log(all);
 
//To show the content, use:
//Something od with the displaying of the content
//console.log(all);
 
//Slice and remove Ole & Janne
//Ole is 4, Janne is 5
//var allSplice = all.splice(4,2);
//console.log(all);
 
//OPTIONAL: Replace
//var allSplice = all.splice(4,2, "REPLACE", "REPLACE");
//console.log(all);
 
//Reverse the Array, so that the Girls comes before the Boys!
//console.log(all.reverse());
 
//Sort the Array, notice capitol letters
//all.sort();
//console.log(all);
 
//Uppercase all the elements & Sort the Array
//var newArray = [];
//
//for (var i = 0; i < all.length; i++) {
//    
//    //Get the Objects out from the Array as a String (toString)
//    var upperTrans = all[i].toString();
//    
//    //Take each String and uppercase them
//    var up2 = upperTrans.toUpperCase();
//    
//    //Place the String back into a new Array
//    newArray.push(up2);
//}
//
//console.log(newArray.sort());
 
//Upper case and sort with Map
//var allMap = all.map(function(item){return item.toUpperCase();});console.log(allMap);
//console.log(allMap);
 
 console.log("Assignement: M");
//Return names that starts with "l" or "L"
function filter(names, index, letter) {
    var filteredNames = names.filter(function(word) {
       return word.charAt(index) === letter;
    });
    return filteredNames;
}
console.log(filter(all, 0, "L" || "I"));
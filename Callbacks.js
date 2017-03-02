//1
var names = ["Hans", "Ulla", "Peter", "Benny", "Ole", "Ib"];

var filteredNames = names.filter(function (element) {

    return element.length <= 3;

});

names.forEach(function (element) {

    console.log(element);

});

filteredNames.forEach(function (element) {

    console.log(element);

});

//2
var uppercaseNames = names.map(function (element) {

    return element.toUpperCase();

});

console.log(uppercaseNames);


//3
var cars = [
    {id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000},
    {id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900},
    {id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000},
    {id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799},
    {id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799}
];


var carsNewer1999 = cars.filter(function (element) {

    return element.year > 1999;

});

console.log(carsNewer1999);

var carsVolvo = cars.filter(function (element) {

    return element.make === 'Volvo';

});

console.log(carsVolvo);

var carsVolvo = cars.filter(function (element) {

    return element.make === 'Volvo';

});

//5

names = names.map(function (name) {

    return "<li>" + name + "</li>";


});

var lis = "<ul>" + names.join("") + "</ul>";

console.log(lis);
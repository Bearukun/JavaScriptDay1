/*
 *How the Code will be executed: 
 * Print aaaaaa
 * Print ddddddd
 * Print fffffff
 * 
 * Then
 * 
 * print eeeeeee
 * print bbbbbbb
 *
 * 
 * This is due to callback method that has a delay in its function
 */

var msgPrinter = function (msg, delay) {
    setTimeout(function () {
        console.log(msg);
    }, delay);
};
console.log("aaaaaaaaaa");
msgPrinter("bbbbbbbbbb", 2000);
console.log("dddddddddd");
msgPrinter("eeeeeeeeee", 1000);
console.log("ffffffffff");
function myFunction() {
"use strict";


var num = document.getElementById("numb").value;
if(num > 999) {
    num = 0;
}else if (num < 100){
    num = 0;
}else{
    num = num;
}

var digits = num.toString().split('');
var realDigits = digits.map(Number);

document.getElementById("skaitmenys").innerHTML = "Skaitmenys : " + realDigits;

console.log(realDigits);








}

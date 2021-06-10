function myFunction() {
"use strict";

//skaitmenys
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

//suma
var sumDigits = 0;
    for(var i = 0; i < realDigits.length; i++){
        sumDigits += realDigits[i]

}

    document.getElementById("skaitmenusuma").innerHTML = "Skaitmenų suma : " + sumDigits;

//sandauga
var sanDigits = 1;
    for (var i = 0; i < realDigits.length; i++) {
        sanDigits = sanDigits * realDigits[i];
    }

    document.getElementById("skaitmenusandauga").innerHTML = "Skaitmenų sandauga : " + sanDigits;

//vidurkis
var sum = 0;
for( var i = 0; i < realDigits.length; i++ ){
    sum += parseInt( realDigits[i], 10 );
}

var avg = sum/realDigits.length;

    document.getElementById("skaitmenuvidurkis").innerHTML = "Skaitmenų vidurkis : " + avg;

}

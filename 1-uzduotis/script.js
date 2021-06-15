"use strict";

function myFunction() {
let s = document.getElementById("inputs").value;
let h, min, ls;


h = parseInt(s/3600);
min = parseInt(s/60);
ls = s - min * 60;

if(h >= 24) {
    h = h % 24;
}

if(min >= 60) {
    min = min % 60;
}

document.getElementById("h").innerHTML = "Valandos :" + h;
document.getElementById("m").innerHTML = "Minutės: " + min;
document.getElementById("s").innerHTML = "Sekundės: " + ls;
}












//Mano sugalvotas, kurį pasirodo ne taip supratau.






//function myFunction() {


//var h, m, s;

//var reiksme = document.getElementById("inputs").value;
//if(reiksme > 86400) {
    //reiksme = 0;
//}else if(reiksme < 0) {
    //reiksme = 0;
//}else{
    //reiksme = reiksme;
//}
 
//h = reiksme / 3600;
//m = ((h - parseInt(h)) * 3600) / 60;
//s = (m - parseInt(m)) * 60;

//document.getElementById("h").innerHTML = "Valandos :" + parseInt(h);
//document.getElementById("m").innerHTML = "Minutės: " + parseInt(m);
//document.getElementById("s").innerHTML = "Sekundės: " + Math.round(s);
//}

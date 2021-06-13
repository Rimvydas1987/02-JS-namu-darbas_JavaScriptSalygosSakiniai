function myFunction() {
"use strict";

var h, m, s;

var reiksme = document.getElementById("inputs").value;
if(reiksme > 86400) {
    reiksme = 0;
}else if(reiksme < 0) {
    reiksme = 0;
}else{
    reiksme = reiksme;
}
 
h = reiksme / 3600;
m = ((h - parseInt(h)) * 3600) / 60;
s = (m - parseInt(m)) * 60;

document.getElementById("h").innerHTML = "Valandos :" + parseInt(h);
document.getElementById("m").innerHTML = "Minutės: " + parseInt(m);
document.getElementById("s").innerHTML = "Sekundės: " + Math.round(s);
}

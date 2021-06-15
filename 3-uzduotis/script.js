"use strict";

let a, b, c, d, x1, x2;

function diskrim() {

a = document.getElementById("reiksme_A").value;
b = document.getElementById("reiksme_B").value;
c = document.getElementById("reiksme_C").value;

d = (b**2) - (4*a*c);

if (d<0) {

       console.log("Sprendinių nėra, Diskriminantas neigiamas");
    document.getElementById("atsakymas1").innerHTML = "Sprendinių nėra, Diskriminantas neigiamas";
    
} else { if (d==0) {

    x1 = -b / (2*a);
    console.log("Sprendinys 1: " + x1);
    document.getElementById("atsakymas1").innerHTML = "Sprendinys 1: " + x1;

} else {

    x1 = (-b + Math.sqrt(d)) / (2 * a); 
    x2 = (-b - Math.sqrt(d)) / (2 * a);

    document.getElementById("atsakymas1").innerHTML = "Sprendinys 1: " + x1;
    document.getElementById("atsakymas2").innerHTML = "Sprendinys 2: " + x2;
}  
}
}
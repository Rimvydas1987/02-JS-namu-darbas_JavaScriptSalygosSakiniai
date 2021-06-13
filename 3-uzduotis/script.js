"use strict";

let a, b, c, d, x1, x2;

function diskrim() {

a = document.getElementById("reiksme_A").value;
b = document.getElementById("reiksme_B").value;
c = document.getElementById("reiksme_C").value;

d = (b**2) - (4*a*c);

if (d<0) {

       console.log("Sprendinių nėra, Diskriminantas neigiamas");
    document.getElementById("atsakymas").innerHTML = "Sprendinių nėra, Diskriminantas neigiamas";
    
} else { if (d==0) {

    x1 = -b / (2*a);
    console.log("Sprendinys 1: " + x1);
    document.getElementById("atsakymas").innerHTML = "Sprendinys 1: " + x1;

} else {

    x1 = (-b + Math.sqrt(d)) / (2 * a); 
    x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log("Sprendinys 1: " + x1 + " Sprendinys 2: " + x2);
    document.getElementById("atsakymas").innerHTML = "Sprendinys 1: " + x1 + " Sprendinys 2: " + x2;

}  
}
}
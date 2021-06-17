"use strict"
let zingsniai = 0;

function vygdyti(){
for (let i=0; i<40; i++) {

    let divElementas = document.createElement("div");
    divElementas.classList.add("div-dydis");
    divElementas.innerText = i + 1;


    if( (i+1) % 2 == 0 ) {
        divElementas.classList.add("zalias");
    }

    document.querySelector(".conteiner").append(divElementas);

    console.log(i);
    zingsniai++;
    
}
}
window.onload = function () {

    let tipoCarta = ["pica", "corazon", "trebol", "diamante"];
    let aleatorioNumero = Math.floor(Math.random() * 13 + 1);
    let pinta = Math.floor(Math.random() * tipoCarta.length);

    switch (pinta) {
        case 0: pinta = "&spades;";
            break;
        case 1: pinta = "&hearts;";
            break;
        case 2: pinta = "&clubs;";
            break;
        case 3: pinta = "&diams;";
            break;
    };


    if (aleatorioNumero == 11) {
        aleatorioNumero = "J";
    } else if (aleatorioNumero == 12) {
        aleatorioNumero = "Q";
    } else if (aleatorioNumero == 13) {
        aleatorioNumero = "K";
    }


    let h1Carta = document.querySelector("#numero");
    let divCarta = document.querySelector("#tipoCarta");
    let divCarta2 = document.querySelector("#tipoCarta2");

    if(pinta == "&hearts;" || pinta == "&diams;"){
        h1Carta.style.color="red";
        divCarta.classList.add("estiloRojo");
        divCarta2.classList.add("estiloRojo");
    }


    divCarta.innerHTML = pinta;
    divCarta2.innerHTML = pinta
    h1Carta.innerHTML = aleatorioNumero;

};

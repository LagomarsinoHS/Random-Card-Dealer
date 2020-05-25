window.onload = function () {

    let tipoCarta = ["&spades;", "&hearts;", "&clubs;", "&diams;"];
    let aleatorioNumero = Math.floor(Math.random() * 13 + 1);
    let pinta = Math.floor(Math.random() * tipoCarta.length);
    console.log(tipoCarta[pinta]);

    switch (aleatorioNumero) {
        case 11: aleatorioNumero = "J";
            break;
        case 12: aleatorioNumero = "Q";
            break;
        case 13: aleatorioNumero = "K";
            break;
    }

    let h1Carta = document.querySelector("#numero");
    let divCarta = document.querySelector("#tipoCarta");
    let divCarta2 = document.querySelector("#tipoCarta2");

    if (tipoCarta[pinta] == "&hearts;" || tipoCarta[pinta] == "&diams;") {
        h1Carta.style.color = "red";
        divCarta.classList.add("estiloRojo");
        divCarta2.classList.add("estiloRojo");
    }

    divCarta.innerHTML = tipoCarta[pinta];
    divCarta2.innerHTML = tipoCarta[pinta]
    h1Carta.innerHTML = aleatorioNumero;

};

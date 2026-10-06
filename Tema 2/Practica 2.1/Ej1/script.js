/**E1. Diseña un programa con JavaScript que, a partir de una cadena de texto introducida
mediante un campo de texto, realice las conversiones mostradas en la imagen: */




function conversion() {

    
    let texto = document.getElementById("texto");
    let campo1 = document.getElementById("inversa");
    let campo2 = document.getElementById("mayusculas");
    let campo3 = document.getElementById("repetida");
    let campo4 = document.getElementById("inversa_mayusculas");



    let palabra = texto.value;
    //Para inversa
    let vacio = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        vacio = vacio + palabra.charAt(i);

    }
    campo1.value = vacio;


    //Para las mayusuculas
    let resultado2 = palabra.toUpperCase();
    campo2.value = resultado2;

    //Para repetidas
    let resultado3 = palabra.repeat(3);
    campo3.value = resultado3;


    //Invertida y en mayuscula
    let vacio2 = "";
    for (let i = palabra.length - 1; i >= 0; i--) {
        vacio2 = vacio2 + palabra.charAt(i);
    }

    campo4.value= vacio.toUpperCase();



}
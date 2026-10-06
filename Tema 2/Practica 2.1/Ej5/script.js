/**E5. Diseña un programa con JavaScript que, a partir de nueve números introducidos en 9 campos
de texto, muestre una ventana emergente indicando cuál es el mayor de todos.*/


let campos = document.querySelectorAll(".numero");

function mayor() {

    let numeros = [];

    
    for (let i = 0; i < campos.length; i++) {
        
        let n = parseFloat(campos[i].value);

       
        if (isNaN(n)) {
            alert("Rellena los 9 campos con números");
            return;
        }

        numeros.push(n);
    }

    let maximo = Math.max(...numeros);

    alert("El mayor número es " + maximo);
}

/**Ejercicio 4. Dada una lista de palabras en un array, identifica cuáles de esas 
palabras son palíndromos (se leen igual al derecho y al revés). */



const palabras = ["ana", "radar", "javascript", "reconocer", "oro",
    "palindromo", "salas"
];

//ana ,radar reconocer, oro y salas son los palindromos

//¿Como lo identificamos?

//Primero recorremos todas las palabras del array 

console.log("Imprimimos el array de palabras: ");
console.log("----------------------------------");
for (const p of palabras) {
    console.log(p);
}

//Un palindromo es una palabra que al reves es igual que la original
const palindromos = []; //Fuera del bucle para que no se vacie en cada vuelta

for (const p of palabras) {
    //split('') separa en letras, reverse() les da la vuelta y join('') las vuelve a juntar
    const alReves = p.split('').reverse().join('');

    if (p == alReves) {
        palindromos.push(p);
    }
}

console.log("Palindromos: ");
console.log(palindromos);
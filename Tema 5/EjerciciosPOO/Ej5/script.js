/**Ej5. Crea una clase Animal con propiedades nombre y edad, y un método emitirSonido() 
que imprima “sonido genérico”.
• Define una clase Perro que herede de Animal pero que sobrescriba el método para 
imprimir “¡Guau!”.
• Crea un objeto Perro y prueba el método */


class Animal {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;

    }
    emitirSonido() {
        return "sonido genérico";
    }

}


class Perro extends Animal {

    constructor(nombre, edad,raza) {
        super(nombre, edad);
        this.raza = raza;
    }

    emitirSonido() {
        return "¡Guau!";
    }
}


const p = new Perro("Doggy", 2,"carlino");
console.log(p.nombre, p.edad,p.raza);
console.log(p.emitirSonido());


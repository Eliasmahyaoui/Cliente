/**Ej1. Crea un objeto llamado persona con las siguientes propiedades:
• nombre: "Juan"
• edad: 30
• profesion: "Ingeniero"
• Un método presentarse que devuelva una cadena de texto presentando a la 
persona con su nombre y profesión.
Llama al método presentarse e imprime el resultado en la consola */


class persona {


    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }

 presentarse() {
    return "¡Bienvenido ! " + p.nombre + " tienes " + p.edad + " y tu profesion es  " + p.profesion;
}

}
const p = new persona("Juan", 30, "Ingeniero");



console.log(presentarse());
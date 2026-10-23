/**. Ej2. Modifica el objeto persona del ejercicio anterior para incluir un método cumplirAnios 
que incremente la edad de la persona en 1 utilizando el objeto this. Llama al método 
cumplirAnios e imprime la edad actualizada. */


class persona {


    constructor(nombre, edad, profesion) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
    }
    presentarse() {
        return "¡Bienvenido ! " + p.nombre + " tienes " + p.edad + " y tu profesion es  " + p.profesion;
    }

     cumplirAnios() {
    
        return p.nombre + " ha cumpido este anio " + (this.edad + 1);
    }
}


const p = new persona("Juan", 44, "Ingeniero");



console.log(p.presentarse());
console.log(p.cumplirAnios());
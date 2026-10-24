/**Ej4. Crea una clase llamada Coche que tenga las propiedades:
• marca
• modelo
• año
Y un método detalles que devuelva una cadena de texto con la marca, el modelo y el año 
del coche.
Crea dos instancias de Coche y llama al método detalles para cada una.
 */

class Coche{
    constructor(marca,modelo,año){
        this.marca= marca;
        this.modelo= modelo;
        this.año= año;
    }

    detalles(){
        return "La marca del coche es " + this.marca + " su modelo es " + this.modelo + " y el año de salida fue " + this.año;
    }
}

const c= new Coche("Renault","Megane",2004);
const c2= new Coche("BMW", "X6",2025);

console.log(c.detalles());
console.log(c2.detalles());


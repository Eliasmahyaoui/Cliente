/**Práctica 2 
Crea un tipo de objeto que sirve para representar ordenadores. Sus propiedades serán:
• Marca, un texto
• Modelo, un texto
• Memoria RAM, un número que indica los GB de capacidad
• Capacidad de disco duro, un número que indica el GB de capacidad
• Pulgadas de pantalla, un número que indica Pulgadas
Métodos de los ordenadores:
• toString, sirve para obtener en forma de texto los detalles del ordenador
Al crear un ordenador se pueden indicar todos sus valores, pero por defecto (sin ser 
obligado indicarlos) se toman como valores: 17 pulgadas, 512 GB de disco duro y 4 GB de 
RAM. La marca y modelo sí son necesarias */


class ordenadores{
    constructor(marca,modelo,ram=4, capacidad=512,pulgadas=17){


       
        this.marca= marca;
        this.modelo= modelo;
        this.ram= ram;
        this.capacidad= capacidad;
        this.pulgadas= pulgadas;
        }
       
    


    toString(){
        return "Ordenador " + this.marca + this.modelo + "tiene una RAM de " + this.ram +
         " y una capacidad de " + this.capacidad + " con unas pulgadas de " + this.pulgadas;
    }

}


const o= new ordenadores("Macbook", "AirM4",8 ,250);

console.log(o.toString());


class ordenadorePortatiles extends ordenadores{
    constructor(marca, modelo, ram=4, capacidad=256, pulgadas=12,autonomia= 4){
        super(marca, modelo, ram, capacidad, pulgadas);
        this.autonomia= autonomia;
    }

    toString(){
        return "Ordenador " + this.marca + this.modelo + "tiene una RAM de " + this.ram +
         " y una capacidad de " + this.capacidad + " con unas pulgadas de " + this.pulgadas + " y tiene una autonomia de " + this.autonomia;
    }
}

const op= new ordenadorePortatiles("Macbook", "Air m4", 512,8,12,9);

function escribirOrdenadores(texto){
    
    const p = document.createElement("p");
    
    p.textContent=texto;
    document.body.appendChild(p);
}


//COmprobamos que los portatiles se muestran por DOM
escribirOrdenadores(op.toString());

//Comprobamos que sale por defecto las pulgadas 
escribirOrdenadores(o.toString())



/**Crea objetos que representen rectángulos. Estos deben cumplir las siguientes 
características:
• Propiedades del rectángulo: Deben tener ancho (width) y alto (height) como 
propiedades. Estas representarán las dimensiones del rectángulo.
• Validación en el constructor: La construcción de los rectángulos se realizará con 
una función constructora que recibe dos números (ancho y alto). Si alguno es 
menor o igual a cero, se asignará un valor por defecto de 1.
• Método cambiarDimensiones: Este método recibe dos números y permite 
cambiar las dimensiones del rectángulo.
• Método calcularArea: Este método devuelve el área del rectángulo (ancho x alto).
• Método copia: Este método devuelve un nuevo objeto que es una copia del 
rectángulo.
• Método comparar: Este método recibe otro rectángulo y devuelve:
o "mayor" si el área del rectángulo actual es mayor.
o "menor" si es menor.
o "igual" si las áreas son iguales.
Añadir código para validar que todos los requisitos funcionan correctamente y mostrar los 
resultados por pantalla en el DOM. */



class rectangulo {
    constructor(ancho, alto) {

        if (ancho <= 0) {
            this.ancho = 1;
        } else {
            this.ancho = ancho;
        }

        if (alto <= 0) {
            this.alto = 1;
        } else {
            this.alto = alto;
        }
    }
    cambiarDimensiones(newAncho, newAlto) {

        if (newAncho <= 0) {
            this.ancho = 1;
        } else {
            this.ancho = newAncho;
        }

        if (newAlto <= 0) {
            this.alto = 1;
        } else {
            this.alto = newAlto;
        }

    }

    calcularArea() {
        return this.ancho * this.alto;
    }

    copia() {
        return new rectangulo(this.ancho, this.alto);
    }

    comparar(otro) {
        if (this.calcularArea() > otro.calcularArea()) {
            return "mayor";
        } else if (this.calcularArea() < otro.calcularArea()) {
            return "menor";
        } else {
            return "igual";
        }

    }
}

const r = new rectangulo(4, 5);
console.log(r);

console.log(r.calcularArea(8, 5));

r.cambiarDimensiones(12, 5);
console.log(r);

const c = r.copia();
c.cambiarDimensiones(1, 1);
console.log(c);
console.log(r);
console.log(c === r);
console.log(r.comparar(c));         
console.log(c.comparar(r));          
console.log(r.comparar(r.copia()));  

function escribir(texto){ 
const pa = document.createElement('P');
pa.textContent = texto;
document.body.appendChild(pa);
}

escribir("Área del rectángulo r: " + r.calcularArea());
escribir("Área del rectángulo c: " + c.calcularArea());
escribir("Comparación de r con c: " + r.comparar(c) );
escribir("Comparación de c con r: " + c.comparar(r) );
escribir("Comparación de r con su copia: " + r.comparar(r.copia()));      















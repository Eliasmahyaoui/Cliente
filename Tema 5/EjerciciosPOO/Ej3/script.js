/** Crea un objeto llamado libro con las siguientes propiedades:
• titulo: "Cien Años de Soledad"
• autor: "Gabriel García Márquez"
• paginas: 417
• añoPublicacion: 1967
Utiliza un bucle para recorrer todas las propiedades del objeto e imprime cada propiedad y 
su valor.*/


class libro {
    constructor(titulo, autor, paginas, añopublicacion) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.añopublicacion = añopublicacion;
    }


    recorrer() {
        for (let propiedad in this) {
            console.log(propiedad +' ' + this[propiedad]  );
        }
    }


}

const l = new libro("Cien años de Soledad", "Gabriel García Márquez", 417, 1967);
l.recorrer();
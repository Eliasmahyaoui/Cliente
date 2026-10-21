/**Tienes un array de objetos que representan productos. Usa forEach() para 
incrementar en un 10% el precio de cada producto.*/

const productos = [{
        nombre: "Camiseta",
        precio: 20
    },
    {
        nombre: "Pantalón",
        precio: 30
    }, {
        nombre: "Zapatos",
        precio: 50
    }
];

productos.forEach(producto => {
    var porciento= producto.precio *0.10;
    producto.precio +=porciento;
   

});
 console.log("El array con el 10 % "  , productos);

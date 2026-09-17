/**Ejercicio 4. Escribe un programa en JavaScript que pregunte al usuario qué color de
fondo prefiere. El usuario responderá ‘R’ para rojo, ‘V‘ para verde o ‘A’ para azul. Una vez
respondido, el fondo del documento se cambiará al color escogido. Nota: el color de
fondo del documento corresponde a la propiedad bgColor del objeto document. Por tanto,
accederemos a ella mediante la sentencia:

document.body.style.backgroundColor = ' colorExpresadoEnHex '; */


//Preguntamos al usuario que color prefiere
var usuario= prompt("Que color te gustaría que saliese en el documento ? Rojo, Verde o Azul");
//El usuario respondera R, V o A 
//cambiará el fondo del documento al color que haya puesto el usuario

switch (usuario) {
    case 'R':
         document.body.style.backgroundColor = 'red';
        break;
    case 'V':
        document.body.style.backgroundColor = 'green';
        break;
    case 'A':
        document.body.style.backgroundColor= 'blue';
    default:
        break;
}







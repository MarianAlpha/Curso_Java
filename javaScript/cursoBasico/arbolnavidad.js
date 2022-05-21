/* ¡Es hora de poner el árbol de navidad en casa! 🎄

Para ello vamos a crear una función que recibe la altura del árbol, que será un entero positivo del 1 a, 
como máximo, 100.

Si le pasamos el argumento 5, se pintaría esto:

____*____
___***___
__*****__
_*******_
*********
____#____
____#____
Creamos un triángulo de asteriscos * con la altura proporcionada y, a los lados, usamos el guión bajo _
 para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #. */

function createXmasTree(height) {
    let xmasTree = "";
    let numGuiones = height - 1;
  
    for (let i = 0; i < height; i++) {
      xmasTree += "_".repeat(numGuiones) + "*".repeat(2 * i + 1) + "_".repeat(numGuiones) + "\n";
      numGuiones--;
    }
  
    xmasTree += "_".repeat(height - 1) + "#" + "_".repeat(height - 1) + '\n' + "_".repeat(height - 1) + "#" + "_".repeat(height - 1);
  
    return xmasTree;
}

console.log(createXmasTree(9));
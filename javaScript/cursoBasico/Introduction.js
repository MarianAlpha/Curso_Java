var nombre = "Oscar";

// declarar 
var edad;
// inicializar
edad = 30;

edad

var elementos = ["Computadora", "Celular"];

elementos[1]

var persona = {
    nombre : "Diego",
    edad: 30
}

persona

// Funciones

//- Declarativas

function miFuncion() {
    return 3;
}

miFuncion

//- Expresiones

var miFuncion = function(a,b) {  //Mi funcion guarda una funcion
    return a + b; 
}

miFuncion();

function saludarEstudiantes(estudiante) {
    console.log(`Hola ${estudiante}`);  //Si la llamo saludarEstudiantes("Diego") retorna: Hola Diego
}

//Hoisting (es malo)

console.log(nombre);  //Como la variable no esta inicalizada java le hace hoinsting, la inicializa = a undefi

var nombre = "Mari";

/*Coerción es la forma en la que podemos cambiar un tipo de valor a otro, existen dos tipos de coerción:
Coerción implícita = es cuando el lenguaje nos ayuda a cambiar el tipo de valor.
Coerción explicita = es cuando obligamos a que cambie el tipo de valor.*/ 

//Implicita
var a = 4 + "7"
var b = 4 * "7"

//Explicita
var c = String(a)
var d = Number(c)

// Truthy y Falsy

Boolean(); //Es falso por defecto

//False: 0, null, NaN(no a number), Undefined, false, "" (string sin nada)
//True [], {} 

//Operadoes binarios + suma, - resta, * multi , / div 
// "" + "" concatenador, ! negacion (!false=true), = asignacion, == comparacion 3 == "3" true
//=== estrictamente iguales 3 ==="3" false, < menor, > mayor, <= menor o igual, >=mayor o igual
// && y, || ó, 

var edad = 40;
edad ++ //suma 1
edad += 2 //edad = edad + 2
console.log(edad);

//Condicionales
if (false) {
    console.log("Hola");
} else if (true) {
    console.log("Soy falso")
} else {

}

//También el if y el else se pueden escribir en una sola linea

condition ? true : false; //Si es verdad pasa true, si es falso pasa false

var numero = 2;

var resultado = numero ===1 ? "Soy un uno" : "no soy uno";
console.log(resultado);

//Switch

var numero = 1;

switch (numero) {
    case 1: 
        console.log("Soy uno");
        break;
    case 10:
        console.log("Soy un diez");
        break;
    case 100:
        console.log("Soy un cien");
        break;
    default:
        console.log("No soy nada")
}
//Arrays

var frutas = ["Manzana","Platano","Cereza","Fresa"];
console.log(frutas);
console.log(frutas.length);
console.log(frutas[0]);

//Metodos mutar

var masFrutas = frutas.push("Uvas"); //Añadir mas elemntos al array
var ultimo = frutas.pop(); //eliminar el ultimo elemento
var nuevalongitud = frutas.unshift("Uvas"); //añadir al inico
var borrarfrutas = frutas.shift("Uvas"); //Elimina el primer elemento
var posicion = frutas.indexOf("Cereza"); //Devuelve la posicion del elemento
console.log(frutas);
console.log(posicion);
 
/*ciclos Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de 
bucles:
for - recorre un bloque de código varias veces
for/in - recorre las propiedades de un objeto
for/of - recorre los valores de un objeto iterable
while - recorre un bloque de código mientras se cumple una condición específica
do/while - también recorre un bloque de código mientras se cumple una condición específica */

var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludar(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

for(var i = 0; i < estudiantes.length; i++) {
    saludar(estudiantes[i]);
}

for(var estudiante of estudiantes) { //llamar cada esudiante del array
    saludar(estudiante);
}

var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludar(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

while(estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludar(estudiante);
    console.log(estudiantes);
}

// Objetos

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
};

console.log(miAuto.marca);

//Metodos

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`); //Hace referencia a donde estamos
    }
};

console.log(miAuto.detalleDelAuto());

//Función construcstora

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
};

var autoNuevo = new auto("Tesla", "Model 3",2020);
var autoNuevo2 = new auto("Tesla", "Model x",2018);
var autoNuevo3 = new auto("Toyota","Corolla",2020);

console.log(autoNuevo);

// en loop el print es solo para chrome
function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}
var autos = [];
for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto"); 
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}

// mETODO DE RECORRIDO DE ARRAYS

var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libreo", costo: 320},
    { nombre: "Celular", costo:10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];

//Metodo filter Valida si hay un elemento verdadero o falso y los mete en un array
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
}); 
console.log(articulosFiltrados);

//Metodo de map genera un arry

var nombreArticulo = articulos.map(function(articulo){
    return articulo.nombre
});
console.log(nombreArticulo);

////////////////////////////////////////////////////////////
var articulos = [
    { nombre: "Bici", costo: 3000},
    { nombre: "TV", costo: 2500},
    { nombre: "Libreo", costo: 320},
    { nombre: "Celular", costo:10000},
    { nombre: "Laptop", costo: 20000},
    { nombre: "Teclado", costo: 500},
    { nombre: "Audifonos", costo: 1700}
];

//Metodo find encontrar algo dentro del articulo

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});

console.log(encuentraArticulo);

//Metodo forEach no devuelve un array, rteggresa cosas

articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

//Metodo some si devuelve array solo true o false

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
});
console.log(articulosBaratos);

/* Por si a alguien le quedó alguna duda con respecto a la diferencia entre find y filter:

El método find () devuelve el primer valor que coincide de la colección. Una vez que coincida con el valor 
en los resultados, no verificará los valores restantes en la colección de matriz.

El método filter () devuelve los valores coincidentes en una matriz de la colección. Verificará todos los
 valores de la colección y devolverá los valores coincidentes en una matriz. */

//Eliminar objetos

switch (false) { 
	case false: console.log("Soy falso :( ") 
	case true: console.log("Soy verdadero!") 
}

// toLowerCase para convertir en minusculas
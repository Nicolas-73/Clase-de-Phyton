// La siguente linea imprime en la consola del navegador el texto !Hola Javascript!

console.log('¡Hola Javascript!')

// 1. COMENTARIOS, avascript ignora estas lineas y sirve para explicar el código

// Esto es un comentario de una linea

/*
    Esto es un comentario
    de
    varias
    líneas
*/

// 2. TIPOS DE DATOS

// Primitivos básicos:

// 2.1 Number (números)

// Ejemplos: 123, 24.89, -67, 0

console.log(20)
console.log(typeof 20) //number
console.log(123)
console.log(typeof 123) //number
console.log(34.89)
console.log(typeof 34.89) //number
console.log(-67)
console.log(typeof -67) //number
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// 2.2 String (Texto)

console.log("Nicolás")
console.log(typeof "Nicolás") //string
console.log('Ticse')
console.log(typeof 'Ticse')

// 2.3. Boolean (verdadero o falso)

console.log(true)
console.log(false)

// 2.4. undefined, no tiene valor aún

let x //Estoy declarando una variable
console.log(x)

// 2.5. null, intencionalmente está vacío

let nombre = null
console.log(nombre)

// Ejercicio, verificar que tipo de datos devuelven las siguientes líneas

console.log(typeof 10) //number
console.log(typeof "hola") //string
console.log(typeof true) //boolean
console.log(typeof undefined) //undefined
console.log(typeof null) //object (Es un error se JS)

// 3. Variables (Guardar datos)

// const (valores que no cambian durante la ejecución)

const pi = 3.141599

console.log(pi)

// pi = 4.98888 // main.js:73 Uncaught TypeError: Assignment to constant variable.

// let (pueden cambiar los valores durante la ejecución del programa)

let edad = 20

console.log(edad)

edad = 25

console.log(edad)

// 4. Operadores matemáticos

console.log(1 + 3)
console.log(6 - 5)
console.log(2 * 8)
console.log(2 / 8)
console.log(10 / 2)
console.log(7 % 2) //Residuo
console.log(3 ** 2) // Exponente
console.log(Math.pow(3, 2)) //Exponente

// Ejercicio: Dadas dos variavles, a con valor 10 y b con valor 3. Realiza una operación que permita obtener el residuo de la división entre a y b. Luego muestra el resultado en consola.

let a = 10

let b = 3

console.log(a % b)

// Comparaciones

// Igualdad débil ==

console.log(1 == "1") // true (solo compara sus valores)

//Igualdad estricta === (RECOMENDACIÓN: Usar siempre)

console.log(1 === "1") // false (compara el valor y el tipo de dato)

// 6. Operadores lógicos (AND, OR, NEGACIÓN)

console.log(true && false) // false
console.log(true || false) // true
console.log(!true) //false
console.log(!false) //true

// EJERCICIOS

// 1. Definir las variables para hallar al área de un triángulo. Base = 10, Altura = 5. Imprimir el resultado en la consola

let Base = 10

let Altura = 5

console.log((Base * Altura) / 2)

// 7. Concatenación (unir textos)

let nombre2 = "Nicolás"
let edad2 = 18

console.log("Hola" + nombre2) //HolaNicolás
console.log("Hola " + nombre2) //Hola Nicolás
console.log("Hola " + nombre2 + ", tienes " + edad2 + " años.") // Hola Nicolás, tienes 18 años.
//Mejor forma de concatenar (template strings) - backtick (alt gr + })
console.log(`Hola ${nombre2}, tienes ${edad2} años.`) // Hola Nicolás, tienes 18 años.

// 8. Condicionales (if)

let numero = 4

if(numero % 2 === 0) { // Si es verdadera la condición se ejecuta el bloque entre las llaves.
    console.log('Es par')
}

let nota = 18

if (nota >= 13) {
    console.log('Aprobado')
} else {
    console.log('Desaprobado')
}

let heroe = 'Spiderman'

if (heroe === 'Batman') {
    console.log('Hola soy Bruce.')
} else if (heroe === 'Spiderman') {
    console.log ('Hola soy Peter.')
} else if (heroe === 'Ironman') {
    console.log('Hola soy Tony.')
} else {
    console.log('No soy un heroe.')
}

// TODO: Investigar la estructura switch

// 9. ESTRUCTURAS REPETITIVAS (FOR, WHILE, DO WHILE)

// for (Sirve para repetir una o varias instrucciones)

// Ejercicio: imprimir en consola los números del 0 al 9

// console.log(0)
// console.log(1)
// console.log(2)
// console.log(3)
// console.log(4)
// console.log(5)
// console.log(6)
// console.log(7)
// console.log(8)
// console.log(9)

for (let i = 0; i < 10; i++){
    console.log(i)
}

// while

let j = 0

while (j < 10) {
    console.log('while', j)
    
    j++
}

//do while

//Investigar la diferencia entre while y do while

// EJERCICIOS

// 2. Dado un número, mostrar "par y mayor a 10", "par y menor o igual a 10", "Impar"

let n = 12

if (n % 2 === 0) {
    if (n > 10)
    console.log('Par y mayor a 10')
} else if (n % 2 === 0) {
    if (n <= 10)
    console.log('Par y menor o igual a 10')
} else {
    console.log('Impar')
}

// 3. Dado un número entero, escribe un programa que:
// - Muestre "fizzbuzz" si el número es divisible entre 3 y 5.
// - Muestre "fizz" si el número es divisible solo entre 3.
// - Muestre "buzz" si el número es divisible solo entre 5.
// - En cualquier otro caso, debe mostrar el mismo número.

let d = 18

if (d % 3 === 0 && d % 5 === 0) {
    console.log('fizzbuzz')
} else if (d % 3 === 0) {
    console.log('buzz')
} else if (d % 5 === 0) {
    console.log('fizz')
} else {
    console.log(d)
}

// 10. Función

// Una función es un bloque de código reutilizable que hace una tarea

//fENTRADA -> [LÓGICA] -> SALID CON EL RESULTADO

// Función básica

function saludar() {
    console.log('¡Hola funciones!')
}

saludar() // Ejecutar la función
saludar() // Ejecutar la función
saludar() // Ejecutar la función

// Funciones con parámetros

function saludoConNombre (nombre) {
    console.log('Hola ' + nombre)
}

saludoConNombre('Nicolás')
saludoConNombre()

// Funciones que retornan valores

function sumar(a, b) {
    const suma = a + b

    return suma //Devuelve solo el resultado de lo que se opere
}

console.log(sumar(2, 3))

// Ejercicios

function esPar(número) {
    return número % 2 === 0 // boolean
}

console.log(esPar(4)) // true
console.log(esPar(7)) // false

// Ejercicios

// 1. Crear una función que reciba un número y devuelva el doble de ese número por consola

function duplicar(t) {
    const duplicar = t * 2

    return duplicar
}

console.log(duplicar(16))

// 2. Crear una función que reciba dos números y devuelva el mayor por consola

function mayor(k, f) {
    if(k > f) {
        console.log(k + ' Es mayor')
    } else if(k < f) {
        console.log(f + ' Es mayor')
    } else {
        console.log('Son iguales')
    }
}

console.log(mayor(7, 5))

// 3. Reutilizar el ejercicio de fizzBuzz usando funciones de tal forma que puedan llamarlo de la siguiente manera. Ej. fizzBuzz(15) -> fizzbuzz

function fizzbuzz(l) {
    if (l % 3 === 0 && l % 5 === 0) {
      return 'fizzbuzz'
    } else if (l % 3 === 0) {
      return 'buzz'
    } else if (l % 5 === 0) {
      return 'fizz'
    } else {
        return l
    }
}

console.log(fizzbuzz(18))

// 11. Cadena de texto

// Propiedad .length

console.log("Hola".length) // 4

// Accdeder a caracteres, cada letra tiene una posición (empieza con 0)

let miNombre = 'Nicolás'

console.log(miNombre[0]) // V
console.log(miNombre[1]) // i
console.log(miNombre[2]) // c

// Métodos importantes de las cadesnas de texto

console.log( miNombre.toLowerCase()) // nicolás
console.log( miNombre.toUpperCase()) // NICOLÁS
console.log( miNombre.includes('co')) // true

// EJERCICIOS:

// 1. Dado un string, crear una función llamada evaluarTexto que devuelva: "Largo" si tiene más de 10 caracteres y "Corto" si tiene 10 o menos.

function evaluarTexto (nombre3) {
    if (nombre3.length > 10) {
       return 'Largo'
    } else {
        return 'Corto'
    }
}

console.log(evaluarTexto('Javascript'))

// 2. Dado un string, crear una función llamada invertirTexto que devuelve el texto invertido. Ej. hola -> aloh

function invertirTexto (txt) {
    return txt.split('').reverse().join('');
}

console.log(invertirTexto('Computadora'))
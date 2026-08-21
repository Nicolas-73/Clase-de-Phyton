// ECMASCRIPT -> Estándar que define como debe funcionar JS
// Chrome, MS Edge, Brave, etc -> V8
// Firefox -> SpiderMonkey
// Safari -> JavaScriptCore

// Versiones importantes ECMAScript
// Cada nueva versión agrega características al lenguaje
// ES5 (2009)
// ES6 (2015) -> Se hicieron muchas actualizaciones.
// * importantes. Apareció let y const en lugar de var.
// * arrow functions.
// * clases.
// * template strings.
// * destructuring.
// * promesas, etc.

// Funciones por declaración
// Funciones sin parámetros

function nombreDeLaFunción() {
    console.log('¡Hola a todos G31!')
}

nombreDeLaFunción()

// Funciones con parámetros por defecto con retorno y en múltiples líneas

function calcularSíEsMayorDe18(edad = 1) {
    console.log(edad) // undefined si no pasamos el parámetro
    console.log(undefined > 18) // false
    if (edad > 18) {
        return 'Es mayor de edad'
    } else {
        return 'Es menor de edad'
    }
}

console.log(calcularSíEsMayorDe18())
console.log(calcularSíEsMayorDe18(25))

// ARROW FUNCTIONS (Funciones flecha) =>

// Funciones sin parámetros en una línea

// function imprimiendoSaludo1() {
//   console.log('Hola a todos nuevamente - sin arrow funcions')
// }

// imprimiendoSaludo1()

const imprimiendoSaludo2 = () => console.log('Hola a todos nuevamente')

imprimiendoSaludo2()

// Funciones con parámetros en una línea
const suma = (número1, número2) => número1 + número2

// function suma(número1, número2) {
//     return número1 + número2
// }

console.log(suma(5, 2)) // 7

// Arrow function con parámetros por defecto con retorno y en múltiples líneas

const saludoEnMayúsculas = (nombre = 'Anónimo') => {
    const nombreEnMayúsculas = nombre.toUpperCase()

    return '¡Hola ' + nombreEnMayúsculas + '!'
}

console.log(saludoEnMayúsculas())
console.log(saludoEnMayúsculas('Uzziel'))

// PARÁMETROS REST (operador rest -> ...)
// Permiten que la función reciva una cantivad indefinida de argumentos y los agrupa dentro de un array

const números = [4, 5]

const miSuma = (n1, n2) => n1 + n2

console.log(miSuma(7, 3)) // 10
console.log(miSuma(...números)) // 9

const listaDeNúmeros = [6, 33, 1, -66, 998, 453]

console.log(Math.max(25, 8, 65, 9, 54)) // 65
console.log(Math.max(...listaDeNúmeros)) // 998

const miSuma2 = (...números) => {
    console.log(números)
    // return reduce (...)
}

miSuma2(1, 2, 3, 4, 5, 6)

// SPREAD OPERATOR (...)
// Sirve para expandir un arreglo, e incluso objetos

const frutas = ['manzanas', 'naranjas', 'sandias']

const verduras = ['papas', 'cebollas']

console.log(frutas.concat(verduras))

const frutasYVerduras = [...frutas, ...verduras]

console.log(frutasYVerduras) // ['manzanas', 'naranjas', 'sandias', 'papas', 'cebollas']

const persona = {
    nombre: 'Nicolás',
    edad: 18,
    color: 'azul'
}

const stack = {
    javascript: 'React.js',
    python: 'Flask',
    nodejs: 'Express.js',
    color: 'rojo'
}

console.log({ ...persona, ...stack })

console.log({ persona, stack })

// Template strings (template literals)
// Forma moderna de crear cadenas de texto usando backticks(`) -> AltGr + }
// ${} -> Permite insertar variables o valores directamente

const nombre = 'Nicolás'
const mensaje = '¡Hola ' + nombre + ', bienvenido!'

console.log(mensaje)

const mensaje2 = `Hola ${nombre}, bienvenido`

console.log(mensaje2)

const a = 90
const b = 47
// const suma2 = a + b

console.log(`La suma es ${a + b}`) // La suma es 137
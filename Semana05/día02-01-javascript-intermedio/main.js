// console.log('Hola JS')

// TIPOS DE DATOS PRIMITIVOS (Number, String, Boolean, null, undefined, BigInt, Symbol)

// TPOS DE DATOS NO PRIMITIVOS (Arrays (Arreglos), Objedts (Objetos), Function, etc)

// ARRAYS

// Un arreglo puede contener elementos de cualquier tipo: cadena, números, booleans, null, arrays,objetos, etc

// DECLARACIÓN

const arregloVacío = []
const listaDeNúmeros = [25, 36, 89, -99, 15.60]
const listaDeValores = [1, 2, 3, 'Nicolás', 'Ticse', 'Código', true, null, undefined]

console.log(arregloVacío)
console.log(listaDeNúmeros)
console.log(listaDeValores)

// Lectura de los elementos de un arreglo

console.log(listaDeValores[0]) // 1
console.log(listaDeValores[3] + ' ' + listaDeValores[4]) // Nicolás Ticse
console.log(listaDeValores[5]) // Código
console.log(listaDeValores[99]) // undefined

// Escritura en un arreglo

listaDeValores[3] = 'Diego'
listaDeValores[7] = 1689

console.log(listaDeValores)

Object.freeze(listaDeValores)
listaDeValores[8] = 'Hola a todos'
console.log(listaDeValores)

// Insertar nuevos elementos en un arreglo al final (push)

const listaDeNombres = ['Diego', 'Nicolás']

console.log(listaDeNombres)

listaDeNombres.push('Kirby')
listaDeNombres.push('Freddy')
listaDeNombres.push('Juan')
listaDeNombres.push('Manuel')
listaDeNombres.push('Luis')

console.log(listaDeNombres)

// Remover elementos del final de un arreglo (pop)

listaDeNombres.pop()
listaDeNombres.pop()
listaDeNombres.pop()

console.log(listaDeNombres)

// Insertar un elemento en una posición determinada

listaDeNombres.splice(0, 0, 'Código')
listaDeNombres.splice(2, 0, 'TECSUP')

console.log(listaDeNombres)

// Eliminar un elemento en una posición determinada

listaDeNombres.splice(2, 1)

console.log(listaDeNombres)

// Obtener el tamaño de nuestro arreglo

console.log(listaDeNombres.length) // 5
console.log('Bienvenido'.length) // 10

// Obtener el último elemento del arreglo

console.log(listaDeNombres[3 - 1]) // Nicolás
console.log(listaDeNombres[listaDeNombres.length - 1]) // Freddy
console.log(listaDeNombres.at(0)) // Código
console.log(listaDeNombres.at(-1)) // Freddy
console.log(listaDeNombres.at(-2)) // Kirby

// TODO: Otras funciones - slice (Investiguen)

// MÉTODOS DE ARREGLOS (INCLUDES, FILTER, MAP, SORT, FOREACH, REDUCE)

// Método INCLUDES, nos indica si el valor se pasa como parámetro se encuentra en el arreglo y siempre devuelve un boolean (true o false)

const lenguajes = ['javascript', 'php', 'phyton', 'C', 'c++', 'java', 'phyton']

console.log(lenguajes.includes('java')) // true
console.log(lenguajes.includes('cobol')) // false

// Método Filter, nos ayuda a ubicar un elemento dentro de un arreglo usando una condición y devuelve un nuevo arreglo con lo que ha encontrado

const resultado = lenguajes.filter(function (item) {
    // return item === 'java'
    // return item === 'phyton'
    // return item.includes('c') || item.includes('C')
    return item.toLowerCase().includes('c')
})

console.log(resultado)

// Método MAP, evalua un arreglo, lo madifica y hay que pasarle una función. Nos devuelve un arreglo modificado. Siempre devuelve un nuevo arreglo.

console.log(lenguajes)

const nombreConTítuloEspecial = lenguajes.map(function(lenguaje) {
    // Lógica para evaluar y modificar el arreglo
    // return 'Hola'
    return '*' + lenguaje + '*'
})

console.log(nombreConTítuloEspecial)

// Método SORT, nos ayuda a ordenar un arreglo de elementos. Muta (cambia) el arreglo original. User toSorted() en lugar de sort como recomendación.

// const ordenandoLenguajes = lenguajes.sort() // Sort muta (cambia) el arreglo original
const ordenandoLenguajes = lenguajes.toSorted()

console.log(ordenandoLenguajes)
console.log(lenguajes)

// Método FOREACH, nos ayuda a recorrer un arreglo sin tener ningún retorno de datos.

for (let index = 0; index < 10; index++) {
    console.log(index)
}

const miArreglo = []

lenguajes.forEach(function(lenguaje) {
    console.log('#', lenguaje)
    miArreglo.push('El mejor: ' + lenguaje)
})

console.log(miArreglo)

// Método REDUCE, nos ayuda a acumular (sumar) los valores de un arreglo

const numbers = [3, 40, 100, 7, 50] // 200

// Con un FOR

let sumatoria = 0 // Acumulador

for (let i = 0; i < numbers.length; i++) {
    sumatoria = sumatoria + numbers[i]
}

console.log(sumatoria)

const sumatoriaConReduce = numbers.reduce(function(acumulador, valorActual) {
    return acumulador + valorActual
}, 0)

console.log(sumatoriaConReduce) // 200

// OBJETOS, una forma de guardar información en partes de clave: valor

// Un objeto sirve para agrupar datos relacionados en un solo lugar

/*
    {
    KEY: VALUE
    KEY2: VALUE2
    KEY3: VALUE#
    }
*/

const miObjetoVacío = {}

console.log(miObjetoVacío)

const persona = {
    nombre: 'Diego',
    edad: 18,
    esEstudiante: true,
    "mi color favorito": 'Azul',
    coloresFavoritos: ['Azul', 'Amarillo', 'Verde']
}

const persona2 = {
    nombre: 'Luis',
    edad: 21,
    esEstudiante: false
}

// Leer los campos de un objeto (notación de punto y de corchete)

console.log(persona.nombre) // Diego
console.log(persona.edad) // 18
console.log(persona2.edad) // 21
console.log(persona.estadoCivil) // undefined
console.log(persona.coloresFavoritos) // ['Azul', 'Amarillo', 'Verde']
console.log(persona.coloresFavoritos[0]) // Azul
console.log(persona["mi color favorito"]) // Azul

// Eliminar las propiedades de un objeto

delete persona2.esEstudiante
persona2.edad = undefined

console.log(persona2)

// Insertar una nueva proiedad a un objeto

persona.platilloFavorito = 'Papa a la huancaína'
persona['juegos favoritor'] = ['Kirby', 'Pokemon', 'Dragon Ball', 'Attack on Titan']

console.log(persona)
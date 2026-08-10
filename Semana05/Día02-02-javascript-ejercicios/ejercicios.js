// TODO: Resolver los siguientes ejercicios para el siguiente jueves y compartir conmigo su repositorio con las soluciones.

// Ejercicio 1: Contar vocales
// Descripción: retorna cuántas vocales contiene un texto dado, sin importar las mayúsculas.

function contarVocales(texto) {
    const resultado = texto.toLowerCase().split('').filter(
        function(letra) {
            return 'aieouáíéóú'.includes(letra)
        }
    )
    
    return resultado
}

console.log('Ejercicio1: Contar vocales')
console.log(contarVocales('Hola Mundo'))
console.log(contarVocales('AIEOU'))
console.log(contarVocales('xyz'))
console.log(contarVocales('Programación'))

// Ejercicio 2: Eliminar duplicados
// Descripción: Elimina elementos duplicados de un array manteniendo el orden.

function eliminarDuplicados(arr = []) {
    // VERSIÓN 1
//     const resultado = []

//     for (const elemento of arr) {
//         if (!resultado.includes(elemento)) {
//             resultado.push(elemento)
//         }
//     }

//   return resultado

  //VERSIÓN 2
  return [...new Set(arr)]
}

console.log('Ejercicio 2: Eliminar duplicados')
console.log(eliminarDuplicados([1,2,2,3])) // → [1,2,3]
console.log(eliminarDuplicados(['a', 'b', 'a'])) // → ['a','b']
console.log(eliminarDuplicados([])) // → []
console.log(eliminarDuplicados([true, false, true])) // → [true, false]

// Ejercicio 3: Invertir texto
// Descripción: Invierte una cadena de texto.

function invertirTexto(texto = '') {
  return texto.split('').reverse('').join('')
}

console.log('Ejercicio 3: Invertir texto')
console.log(invertirTexto('hola')) // → 'aloh'
console.log(invertirTexto('123')) // → '321'
console.log(invertirTexto('')) // → ''


// Ejercicio 4: Sumar array
// Descripción: Retorna la suma total de todos los números en un array.

function sumarArray(arr = []) {
  return arr.reduce((acumulador,actual) => acumulador + actual, 0);
}

console.log('Ejercicio 4: Sumar array')
console.log(sumarArray([1,2,3])) // → 6
console.log(sumarArray([])) // → 0
console.log(sumarArray([-1, 1])) // → 0


// Ejercicio 5: Celsius a fahrenheit
// Descripción: Convierte grados Celsius a Fahrenheit.

function celsiusAFahrenheit(c = 0) {
  return ((c * 9) / 5) + 32;
}

console.log('Ejercicio 5: Celsius a fahrenheit')
console.log(celsiusAFahrenheit(100)) // → 212
console.log(celsiusAFahrenheit(-40)) // → -40
console.log(celsiusAFahrenheit(0)) // → 32


// Ejercicio 6: Es palindromo
// Descripción: Retorna true si un texto es un palíndromo (ignora espacios y mayúsculas).

function esPalindromo(texto = '') {
  const limpio = texto.toLocaleLowerCase().replace(/[\s\/]/g,'');
  const invertido = limpio.split('').reverse().join('');

  return limpio === invertido
}

console.log('Ejercicio 6: Es palindromo')
console.log(esPalindromo('Hola')) // → false
console.log(esPalindromo('A man a plan a canal Panama')) // → true
console.log(esPalindromo('Anita lava la tina')) // → true


// Ejercicio 7: Elementos en Común
// Descripción: Retorna un array con los elementos en común entre dos arrays (sin repetir).

function elementosEnComun(arr1 = [], arr2 = []) {
  const set1 = new Set(arr1)
  return [...new Set(arr2.filter(item => set1.has(item)))];
}

console.log('Ejercicio 7: Elementos en Común')
console.log(elementosEnComun(['a','b'], ['b','c'])) // → ['b']
console.log(elementosEnComun([], [1,2])) // → []
console.log(elementosEnComun([1,2,3], [2,3,4])) // → [2,3]
console.log(elementosEnComun([true], [true, false])) // → [true]


// Ejercicio 8: Mayor número
// Descripción: Retorna el número más grande de un array de números.

function mayorNumero(arr = []) {
  return Math.max(...arr);
}

console.log('Ejercicio 8: Mayor número')
console.log(mayorNumero([-1, -5, -3])) // → -1
console.log(mayorNumero([42])) // → 42
console.log(mayorNumero([1, 5, 3])) // → 5


// Ejercicio 9: Repetir texto
// Descripción: Repite un texto N veces separados por espacio.

function repetirTexto(texto = '', veces = 1) {
  return (texto + ' ').repeat(veces).trim();
}

console.log('Ejercicio 9: Repetir texto')
console.log(repetirTexto('JS', 1)) // → 'JS'
console.log(repetirTexto('Bye', 0)) // → ''
console.log(repetirTexto('Hola', 3)) // → 'Hola Hola Hola'


// Ejercicio 10: Capitalizar
// Descripción: Convierte la primera letra de un texto en mayúscula.

function capitalizar(texto = '') {
  return texto.charAt(0).toLocaleUpperCase() + texto.slice(1);
}

console.log('Ejercicio 10: Capitalizar')
console.log(capitalizar('javaScript')) // → 'JavaScript'
console.log(capitalizar('')) // → ''
console.log(capitalizar('hola')) // → 'Hola'


// Ejercicio 11: Filtrar pares
// Descripción: Retorna un nuevo array con solo los números pares del array original.

function filtrarPares(arr = []) {
  return arr.filter(num =>num % 2 === 0);
}

console.log('Ejercicio 11: Filtrar pares')
console.log(filtrarPares([5,7,9])) // → []
console.log(filtrarPares([0, 10, 15])) // → [0, 10]
console.log(filtrarPares([1,2,3,4])) // → [2,4]


// Ejercicio 12: Contar palabras
// Descripción: Cuenta cuántas palabras tiene una frase (separadas por espacios).

function contarPalabras(frase = '') {
  const limpio = frase.trim();
  if (limpio === '') return 0;

  return limpio.split(/\s+/).length;
}

console.log('Ejercicio 12: Contar palabras')
console.log(contarPalabras('')) // → 0
console.log(contarPalabras(' Uno dos tres ')) // → 3
console.log(contarPalabras('Hola mundo JS')) // → 3


// Ejercicio 13: Reemplazar palabra
// Descripción: Reemplaza una palabra específica por otra dentro de una frase.

function reemplazarPalabra(frase = '', buscar = '', reemplazar = '') {
  return frase.replace(buscar, reemplazar);
}

console.log('Ejercicio 13: Reemplazar palabra')
console.log(reemplazarPalabra('Hola mundo', 'mundo', 'JS')) // → 'Hola JS'
console.log(reemplazarPalabra('La casa es blanca', 'blanca', 'roja')) // → 'La casa es roja'
console.log(reemplazarPalabra('Me gusta el café', 'café', 'té')) // → 'Me gusta el té'


// Ejercicio 14: Limpiar array
// Descripción: Elimina todos los valores falsy de un array.

function limpiarArray(arr = []) {
  return arr.filter(Boolean);
}

console.log('Ejercicio 14: Limpiar array')
console.log(limpiarArray([null, undefined, NaN, 4])) // → [4]
console.log(limpiarArray(['a', '', 'b'])) // → ['a', 'b']  
console.log(limpiarArray([0, 1, false, 2, '', 3])) // → [1, 2, 3]


// Ejercicio 15: Generar rango
// Descripción: Genera un array del 1 al número dado (inclusive).

function generarRango(n = 0) {
  return [Array.from({ length: n }, (_, i) => i + 1)];
}

console.log('Ejercicio 15: Generar rango')
console.log(generarRango(1)) // → [1]
console.log(generarRango(0)) // → []
console.log(generarRango(3)) // → [1, 2, 3]


// Ejercicio 16: Caracter frecuente
// Descripción: Retorna el carácter que más veces aparece en un texto (ignora espacios).

function caracterFrecuente(texto = '') {
  const limpio = texto.replace(/\s/g, '');
  const conteo = {};
  let maxCar = '';
  let maxNum = 0;

  for (let char of limpio) {
    conteo[char] = (conteo[char] || 0) + 1;
    if (conteo[char] > maxNum) {
      maxNum = conteo[char];
      maxCar = char
    }
  }

  return maxCar;
}

console.log('Ejercicio 16: Caracter frecuente')
console.log(caracterFrecuente('xyz xyz')) // → 'x'
console.log(caracterFrecuente('aa bb cc dd')) // → 'a'
console.log(caracterFrecuente('aabbbc')) // → 'b'


// Ejercicio 17: Contar ocurrencias
// Descripción: Cuenta cuántas veces aparece cada palabra en una frase y devuelve un objeto.

function contarOcurrencias(frase = '') {
  const palabras = frase.toLowerCase().trim().split(/\s+/);
  return palabras.reduce((contador, palabra) => {
    if (palabra) {
      contador[palabra] = (contador[palabra] || 0) + 1;
    }
    return contador;
  }, {});

}

console.log('Ejercicio 17: Contar ocurrencias')
console.log(contarOcurrencias('a b a b c')) // → { a: 2, b: 2, c: 1 }
console.log(contarOcurrencias('')) // → {}
console.log(contarOcurrencias('hola hola mundo')) // → { hola: 2, mundo: 1 }


// Ejercicio 18: Obtener longitudes
// Descripción: Retorna un array con las longitudes de cada palabra en un texto.

function obtenerLongitudes(texto = '') {
  return texto.split(' ').map(palabra => palabra.length);
}

console.log('Ejercicio 18: Obtener longitudes')
console.log(obtenerLongitudes('Hola mundo JS')) // → [4, 5, 2]
console.log(obtenerLongitudes('a bc def')) // → [1, 2, 3]
console.log(obtenerLongitudes('')) // → []


// Ejercicio 19: Promedio array
// Descripción: Calcula el promedio de un array de números.

function promedioArray(arr = []) {
  const suma = arr.reduce((acumulado, actual) => acumulado + actual, 0);
  const promedio = suma / arr.length;

  return promedio;
}

console.log('Ejercicio 19: Promedio array')
console.log(promedioArray([2, 4, 6, 8])) // → 5
console.log(promedioArray([10])) // → 10
console.log(promedioArray([])) // → 0


// Ejercicio 20: Texto a lista
// Descripción: Convierte una cadena separada por comas en un array limpio y sin espacios extra.

function textoALista(texto = '') {
  return texto.split(',').map(item => item.trim()).filter(item => item !=='');
}

console.log('Ejercicio 20: Texto a lista')
console.log(textoALista(' manzana, pera , uva')) // → ['manzana', 'pera', 'uva']
console.log(textoALista('a,b,c')) // → ['a', 'b', 'c']
console.log(textoALista('')) // → []
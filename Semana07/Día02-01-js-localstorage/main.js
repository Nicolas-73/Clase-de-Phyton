// LocalStorage

// Es una forma de guardar datos en el navegador
// LS es para guardar solo cadenas de texto
// Límite: 5MG

// Guardar datos
localStorage.setItem('nombre', 'Nicolás')
localStorage.setItem('color', 'blue')
// Obtener o recperar los datos de LS
console.log(localStorage.getItem('nombre'))
console.log(localStorage.getItem('color'))

// Eliminar un dato
localStorage.removeItem('color')

// Limpiar todo
// localStorage.clear()

// Guardar objetos o arreglos

// Importante: tenemos que convertirlos a cadenas de texto

const user = { name: 'Nicolás', age: 18 }

// Guardar un objeto

localStorage.setItem('user', user) // [objet, Objet]
localStorage.setItem('user', JSON.stringify(user))

// Obtener o recuperar un objeto/array
const user2 = JSON.parse(localStorage.getItem('user'))

console.log(user2.name, user2.age) // Nicolás 18
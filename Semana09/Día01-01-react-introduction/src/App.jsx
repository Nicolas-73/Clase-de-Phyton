// 01 - Componente base usando function

// function App() {
//   return <h1>Hola React.js</h1>
// }

// const App = () => {
//   return <h1>Hola React.js</h1>
// }

// ¿Qué es un componente?
// * Es una función, devuelve JSX, todo componente en su nombre empieza con mayúscula

// Partes de un componente:
// 1. Imports (Si los hay)
// 2. Lógica (variables, hooks, functions)
// 3. Return -> JSX
// 4. Export (Nos sirve para crear un módulo de ES)

// Reglas básicas de un componente:
// * Un solo elemente padre
// * Es recomendable que la función tenga el mismo nombre del archivo. Ej. App.jsx -> App

// 02 - Componente usando múltiples líneas

// function App() {
//   return (
//     <div>
//       <h1>React.js</h1>
//       <p>Estamos aprendiendo sobre componentes.</p>
//     </div>
//   )
// }

// 03 - Componente usando Fragments (<></>)

// function App() {
//   return (
//     <>
//       <h1>React.js</h1>
//       <p>Estamos aprendiendo sobre componentes.</p>
//     </>
//   )
// }

// 04 - Extensiones de VSCODE para usar con React.js
// ES7+ React/Redux/React-Native snippets
// https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets

// Snippets para crear componentes (rfc, rafce)

// snippet: rfc

// function App() {
//   return (
//     <div>App</div>
//   )
// }

// snippet: rafce

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// 05 - Anidar componentes dentro de otros

// function ComponenteSaludo() {
//   return <h4>Hola a todos!</h4>
// }

// function ComponenteDespedida() {
//   return <h4>Adios a todos!</h4>
// }

// const App = () => {
//   return (
//     <section>
//       <h3>Componentes anidados</h3>

//       <ComponenteSaludo />

//       <ComponenteDespedida />
//     </section>
//   )
// }


// 06 - Importando componentes externos

import ComponenteSaludo from "./componentes/componentes-saludo"
import ComponenteDespedida from "./componentes/componentes-despedida"

// TODO: Crear el componente ComponenteDespedida en su propio archivo e importarlo en el componente App

// const App = () => {
//   return (
//     <section>
//       <h3>Componenentes externos</h3>

//       <ComponenteSaludo />

//       <ComponenteDespedida />
//     </section>
//   )
// }
// 07 - Usando expresiones con JSX -> "{}"

// import nombreExportado, { frutas, curso } from "./modulo"

// const App = () => {
//   // Lógica del componente
//   const suma = 8 + 9
//   const nombre = 'Nicolás'

//   // Comentario en React.js va dentro del cuerpo de la función
//   /* Otro comentario multilínea dentro del cuerpo de la función */
//   return (
//     <section>
//       <h1>Usando expresiones con jsx</h1>

//       <p>{suma}</p>
//       <p>{ 1 + 2 * 9 ** 2}</p>
//       <p>{nombre}</p>

//       <p>Hola {nombre}</p>
//       <p>{`Hola ${nombre}`}</p>

//       {/* Comentario en React.js dentrodel JSX */}

//       <p>{frutas}</p>
//       <p>{nombreExportado}</p>
//       <p>{JSON.stringify(curso)}</p>
//       <p>{curso.nombre}</p>
//       <p>{curso.nota}</p>
//     </section>
//   )
// }

// export default App

// 09. - Propiedades de un componente (Ahora el componente será reutilizable)

//10 - Propiedades de un componente (Con destructuring)

const BienvenidaPersonalizada = ({ nombre, edad, color = 'azul' }) => {
  return <h3>Hola {nombre}, tu edad es {edad ?? '18'} años, y tu color favorito es el {color}.</h3>
}

const App = () => {
  return (
    <section>
      <h4>Propiedades de un componente (Con destructuring)</h4>

      <BienvenidaPersonalizada nombre="Nicolás" edad={18} color="azul" />
      <BienvenidaPersonalizada nombre="Diego" edad={18} />
      <BienvenidaPersonalizada nombre="Diego" />
    </section>
  )
}

export default App

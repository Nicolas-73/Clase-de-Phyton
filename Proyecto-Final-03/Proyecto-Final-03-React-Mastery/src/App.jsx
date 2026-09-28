// Avance 01

const App = () => {
  return (
    <div className="flex flex-col gap-8 p-4">
      <section>
        <header className="bg-slate-50">
          <h1 className="text-2xl mb-4 font-bold text-black">LITA DE CONTACTOS</h1>
        </header>

        <main className="bg-slate-100">
          <section className="bg-slate-200 border flex flex-col gap-4 p-3 rounded-lg">
            <h3 className="font-bold text-black">Añadir nuevo contacto</h3>

            <h4 className="font-medium text-black">Nombre</h4>
            <input className="border rounded-sm bg-slate-50" type="text" placeholder="Ingresa el nombre" />
            <h4 className="font-medium text-black">Edad</h4>
            <input className="border rounded-sm bg-slate-50" type="text" placeholder="Ingresa la edad" />
            <h4 className="font-medium text-black">Ciudad</h4>
            <input className="border rounded-sm bg-slate-50" type="text" placeholder="Ingresa la ciudad" />
            <h4 className="font-medium text-black">Teléfono</h4>
            <input className="border rounded-sm bg-slate-50" type="text" placeholder="Ingresa el teléfono" />
            <button className="bg-blue-500 rounded-sm text-slate-50 cursor-pointer hover:bg-blue-800">Añadir +</button>
          </section>

          <section>
            <h3 className="font-bold m-4 text-2xl text-blue-500">Cotactos</h3>
          </section>
        </main>

        <footer className="flex gap-8 p-4 bg-slate-300 text-center content-center">
          <a href="https://github.com/Nicolas-73/Clase-de-Phyton" target="blank" className="text-1xl text-center font-light text-slate-50 hover:text-blue-500">Bootcamp Frontend Python G31 DT - Nicolás Ticse</a>
        </footer>
      </section>
    </div>
  )
}

export default App
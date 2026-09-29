// Avance 02

import { useState } from "react"
import Swal from "sweetalert2"

const App = () => {

  return (
    <div className="flex flex-col gap-8 p-4">
      <section>
        <header className="bg-slate-50">
          <h1 className="text-2xl mb-4 font-bold text-slate-950">LITA DE CONTACTOS</h1>
        </header>

        <main className="bg-slate-100 p-10 flex flex-col items-center content-center">
          <section className="bg-slate-200 border flex flex-col gap-4 p-4 rounded-lg
          w-100">
            <h3 className="font-bold text-slate-950">Añadir nuevo contacto</h3>

            <h4 className="font-medium text-slate-950">Nombre</h4>
            <input className="border rounded-md bg-slate-50 p-2" type="text" placeholder="Ingresa el nombre" />
            <h4 className="font-medium text-slate-950">Edad</h4>
            <input className="border rounded-md bg-slate-50 p-2" type="text" placeholder="Ingresa la edad" />
            <h4 className="font-medium text-slate-950">Ciudad</h4>
            <input className="border rounded-md bg-slate-50 p-2" type="text" placeholder="Ingresa la ciudad" />
            <h4 className="font-medium text-slate-950">Teléfono</h4>
            <input className="border rounded-md bg-slate-50 p-2" type="text" placeholder="Ingresa el teléfono" />
            <button className="bg-blue-700 p-2 rounded-lg text-slate-50 cursor-pointer hover:bg-blue-800">Añadir +</button>
          </section>

          <section>
            <h3 className="font-bold m-4 text-2xl text-blue-500">Cotactos</h3>

            <section>
              <div className="flex justify-between items-center gap-8 p-2 bg-slate-300 rounded-lg border">
                <div className="text-left text-slate-950">Nombre</div>
                <div className="text-left text-slate-950">Edad</div>
                <div className="text-left text-slate-950">Ciudad</div>
                <div className="text-left text-slate-950" >Teléfono</div>
                <div className="flex gap-2 text-slate-950">Opciones</div>
              </div>

              <div className="flex justify-between items-center gap-8 p-2 bg-slate-200 rounded-lg border mt-4">
                <div className="text-left text-slate-950">Contacto01</div>
                <div className="text-left text-slate-950">18</div>
                <div className="text-left text-slate-950">Lima</div>
                <div className="text-left text-slate-950">12345****</div>
                <div className="flex flex-col gap-2">
                  <button className="py-1 px-3 bg-blue-700 text-slate-50 rounded-md hover:bg-blue-800 cursor-pointer">Editar</button>
                  <button className="py-1 px-3 bg-slate-500 text-slate-50 rounded-md hover:bg-slate-600 cursor-pointer">Borrar</button>
                </div>
              </div>
            </section>
          </section>
        </main>

        <footer className="flex flex-col gap-8 p-4 bg-slate-300 text-center items-center content-center">
          <a href="https://github.com/Nicolas-73/Clase-de-Phyton" target="blank" className="text-1xl text-center font-light text-slate-950 hover:text-blue-500">Bootcamp Frontend Python G31 DT - Nicolás Ticse</a>
        </footer>
      </section>
    </div>
  )
}

export default App
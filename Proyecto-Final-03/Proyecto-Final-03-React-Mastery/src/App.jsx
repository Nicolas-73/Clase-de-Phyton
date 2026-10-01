// Avance 03

import { useState } from "react"
import Swal from "sweetalert2"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import Contactos from "./components/Contactos"

const CONTACTOS_PRUEBA = [
  {
    id: '1',
    nombre: 'Juan',
    edad: '18',
    ciudad: 'Lima',
    numero: '12345****'
  },
  {
    id: '2',
    nombre: 'Luis',
    edad: '18',
    ciudad: 'Lima',
    numero: '12345****'
  },
  {
    id: '3',
    nombre: 'Pepe',
    edad: '18',
    ciudad: 'Lima',
    numero: '12345****'
  }
]

const App = () => {
const [contacts, setContacts] = useState(CONTACTOS_PRUEBA)
  const [form, setForm] = useState({
    id: '',
    nombre: '',
    edad: '',
    ciudad: '',
    numero: ''
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({ ...form, [name]: value })
  }

  const handleSave = (event) => {
    event.preventDefault()

    if (form.id) {
      const updatedContacts = contacts.map((contact) =>
        contact.id === form.id ? { ...form } : contact
      )
      setContacts(updatedContacts)
    } else {
      const newContact = {
        ...form,
        id: crypto.randomUUID()
      }
      setContacts([...contacts, newContact])
    }

    setForm({ id: '', nombre: '', edad: '', ciudad: '', numero: '' })
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Borrando...',
      text: '¿Quieres borrar este contacto?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Borrar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        setContacts(contacts.filter((contact) => contact.id !== id))
      }
    })
  }

  const handleEdit = (contact) => {
    setForm(contact)
  }

  return (
    <div className="flex flex-col gap-8 p-4">
      <section>
        <Header />

        <main className="bg-slate-100 p-10 flex flex-col items-center content-center gap-8">
          <Formulario
            form={form}
            onChange={handleChange}
            onSave={handleSave}
          />

          <Contactos
            contacts={contacts}
            form={form}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </main>

        <Footer />
      </section>
    </div>
  )
}

export default App
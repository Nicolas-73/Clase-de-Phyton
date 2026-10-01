const Contactos = ({ contacts, form, onEdit, onDelete }) => {
  return (
    <div>
      <section>
        <h3 className="flex font-bold m-4 text-left text-2xl text-blue-500">
          Contactos
        </h3>

        <section>
          <div className="flex justify-between items-center gap-8 p-2 bg-slate-300 rounded-lg border">
            <div className="text-left text-slate-950">Nombre</div>
            <div className="text-left text-slate-950">Edad</div>
            <div className="text-left text-slate-950">Ciudad</div>
            <div className="text-left text-slate-950">Teléfono</div>
            <div className="flex gap-2 text-slate-950">Opciones</div>
          </div>

          {contacts.map((contact) => (
            <div
              className="flex justify-between items-center gap-8 p-2 bg-slate-200 rounded-lg border mt-4 mb-4"
              key={contact.id}
            >
              <div className="text-left text-slate-950">{contact.nombre}</div>
              <div className="text-left text-slate-950">{contact.edad}</div>
              <div className="text-left text-slate-950">{contact.ciudad}</div>
              <div className="text-left text-slate-950">{contact.numero}</div>
              <div className="flex flex-col gap-2">
                <button
                  className="py-1 px-3 bg-blue-700 text-slate-50 rounded-md hover:bg-blue-800 cursor-pointer"
                  onClick={() => onEdit(contact)}
                >
                  Editar
                </button>
                <button
                  className="py-1 px-3 bg-slate-500 text-slate-50 rounded-md hover:bg-slate-600 cursor-pointer"
                  onClick={() => onDelete(contact.id)}
                >
                  Borrar
                </button>
              </div>
            </div>
          ))}

          <pre>{JSON.stringify(form, null, 2)}</pre>
          <pre>{JSON.stringify(contacts, null, 2)}</pre>
        </section>
      </section>
    </div>
  )
}

export default Contactos
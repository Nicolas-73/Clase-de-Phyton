const Formulario = ({ form, onChange, onSave }) => {
  return (
    <div>
      <form
        className="bg-slate-200 border flex flex-col gap-4 p-4 rounded-lg w-100"
        onSubmit={onSave}
      >
        <h3 className="font-bold text-slate-950">
          {form.id ? "Editar contacto" : "Añadir nuevo contacto"}
        </h3>

        <h4 className="font-medium text-slate-950">Nombre</h4>
        <input
          className="border rounded-md bg-slate-50 p-2"
          type="text"
          name="nombre"
          placeholder="Ingresa el nombre"
          required
          onChange={onChange}
          value={form.nombre}
        />

        <h4 className="font-medium text-slate-950">Edad</h4>
        <input
          className="border rounded-md bg-slate-50 p-2"
          type="text"
          name="edad"
          placeholder="Ingresa la edad"
          required
          onChange={onChange}
          value={form.edad}
        />

        <h4 className="font-medium text-slate-950">Ciudad</h4>
        <input
          className="border rounded-md bg-slate-50 p-2"
          type="text"
          name="ciudad"
          placeholder="Ingresa la ciudad"
          required
          onChange={onChange}
          value={form.ciudad}
        />

        <h4 className="font-medium text-slate-950">Teléfono</h4>
        <input
          className="border rounded-md bg-slate-50 p-2"
          type="text"
          name="numero"
          placeholder="Ingresa el teléfono"
          required
          onChange={onChange}
          value={form.numero}
        />

        <input
          className="font-bold bg-blue-700 p-2 rounded-lg text-slate-50 cursor-pointer hover:bg-blue-800"
          type="submit"
          value={form.id ? "Guardar cambios" : "Añadir +"}
        />
      </form>
    </div>
  )
}

export default Formulario
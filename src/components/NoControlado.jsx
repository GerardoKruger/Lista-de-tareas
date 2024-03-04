import { useRef, useState } from "react";

const NoControlado = () => {
  const form = useRef(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    //capturar los datos

    const data = new FormData(form.current);
    console.log([...data.entries()]);

    const { title, description, state } = Object.fromEntries([
      ...data.entries(),
    ]);

    console.log(title, description, state);

    //validar los datos

    if (!title.trim() || !description.trim() || !state.trim()) {
      return setError("Llena todos los campos");
    }
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Ingrese Todo"
        name="title"
        defaultValue={"todo 1"}
      />
      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        defaultValue={"descripcion 1"}
      />
      <select
        className="form-select mb-2"
        name="state"
        defaultValue={"completado"}
      >
        <option value="pendiente">Pendiente</option>
        <option value="completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
      {error !== "" && error}
    </form>
  );
};
export default NoControlado;

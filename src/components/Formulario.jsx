import Swal from "sweetalert2";
import { useState } from "react";

const Formulario = ({addTodo}) => {
  const [todo, setTodo] = useState({
    title: "Todo 1",
    description: "Description 1",
    state: "pendiente",
    priority: true,
  });

  //*Pinta el error
  // const [error, setError] = useState(false);

  const { title, description, state, priority } = todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    // setError("");
    if (!title.trim() || description.trim() === "" ) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Titulo y descripcion obligatorios!",

      });
    }

    addTodo({
      id: Date.now(),
      ...todo,
      state: state === "completado"
    })

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Todo agregado correctamente",
      showConfirmButton: false,
      timer: 1500
    });

    console.log(title, description, state);

    //*Pinta el error
    // if (!title.trim() || !description.trim() || !state.trim()) {
    //   setError(true);
    //   return;
    // }
  };

  // const PintarError = () => (
  //   <div className="alert alert-danger">Debes llenar todos los campos</div>
  // );

  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);

    const { name, type, checked, value } = e.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <div className="container mt-2">
      
      {/* {error && <PintarError />} */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control mb-2"
          placeholder="Ingrese Todo"
          name="title"
          value={title}
          onChange={handleChange}
        />
        <textarea
          className="form-control mb-2"
          placeholder="Ingrese descripcion"
          name="description"
          value={description}
          onChange={handleChange}
        />
        <div className="form-check mb-2">
          <input
            type="checkbox"
            name="priority"
            className="form-check-input"
            id="inputCheck"
            checked={priority}
            onChange={handleChange}
          />
          <label htmlFor="inputCheck">Dar prioridad</label>
        </div>
        <select
          className="form-select mb-2"
          name="state"
          value={state}
          onChange={handleChange}
        >
          <option value="pendiente">Pendiente</option>
          <option value="completado">Completado</option>
        </select>
        <button type="submit" className="btn btn-primary">
          Procesar
        </button>
      </form>
    </div>
  );
};
export default Formulario;

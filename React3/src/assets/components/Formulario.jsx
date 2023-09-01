import React from "react";

const Formulario = () => {
  return (
    <div className="formulario text-center bg-dark p-5 rounded">
      <form noValidate>
        <div className="mb-2">
          <input
            type="text"
            value=""
            className="form-control"
            id="inputName"
            placeholder="Nombre del Colaborador"
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            value=""
            className="form-control"
            id="inputEmail"
            placeholder="E-mail"
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            value=""
            className="form-control"
            id="inputAge"
            placeholder="Edad"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value=""
            className="form-control"
            id="inputPosition"
            placeholder="Cargo"
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value=""
            className="form-control"
            id="inputPhone"
            placeholder="Telefono"
          />
        </div>

        <div className="pt-4">
          <button className="btn btn-info " type="submit">
            {" "}
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;

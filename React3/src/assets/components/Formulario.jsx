import React, { useState } from "react";

const Formulario = ({ data, setData, dataFilter, setDataFilter, addAlert }) => {
  const [datosColab, setDatosColab] = useState({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "",
  });

  const handleInputs = (e) => {
    const inputs = {
      inputName: "nombre",
      inputEmail: "correo",
      inputAge: "edad",
      inputPositio: "cargo",
      inputPhone: "telefono",
    };

    const inputProp = inputs[e.target.id];
    if (inputProp) {
      setDatosColab({ ...datosColab, [inputProp]: e.target.value });
    }
  };

  // COMENT

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
            //onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            value=""
            className="form-control"
            id="inputEmail"
            placeholder="E-mail"
            //onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            value=""
            className="form-control"
            id="inputAge"
            placeholder="Edad"
            // onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value=""
            className="form-control"
            id="inputPosition"
            placeholder="Cargo"
            // onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value=""
            className="form-control"
            id="inputPhone"
            placeholder="Telefono"
            // onChange={handleInputs}
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

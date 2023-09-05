import React, { useState } from "react";

const Formulario = ({ data, setData, setDataFilter, setAlert }) => {
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
      inputPosition: "cargo",
      inputPhone: "telefono",
    };

    const inputProp = inputs[e.target.id];
    if (inputProp) {
      setDatosColab({ ...datosColab, [inputProp]: e.target.value });
    } 
  };

  const validardatos = (e) => {
e.preventDefault() 


const {nombre, correo, edad, cargo, telefono} = datosColab


const validarValores = !nombre || !correo || !edad || !cargo || !telefono


validarValores ? 
setAlert({
    error: true,
    mensaje: "completa los campos",
    color: "text-danger",
  })
  
: setAlert({
    error: false,
    mensaje: "cuenta creada con exito",
    color: "text-success",
  });
  const Nuevotrabajador = { ...datosColab, id: data.length + 1 };
  setData([...data, Nuevotrabajador]);
   /* setDataFilter([...data, Nuevotrabajador]);  */

  setDatosColab({
    nombre: "",
    correo: "",
    edad: "",
    cargo: "",
    telefono: "", 
  });

  }
/* 
    const Nuevotrabajador = { ...datosColab, id: data.length + 1 };
    setData([...data, Nuevotrabajador]);
    setDataFilter([...data, Nuevotrabajador]);  */



  return (
    <div className="formulario text-center bg-dark p-5 rounded">
      <form noValidate
      onSubmit={validardatos} 
      >
        <div className="mb-2">
          <input
            type="text"
            value={datosColab.nombre}
            className="form-control"
            id="inputName"
            placeholder="Nombre del Colaborador"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="email"
            value={datosColab.correo}
            className="form-control"
            id="inputEmail"
            placeholder="E-mail"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="number"
            value={datosColab.edad}
            className="form-control"
            id="inputAge"
            placeholder="Edad"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={datosColab.cargo}
            className="form-control"
            id="inputPosition"
            placeholder="Cargo"
            onChange={handleInputs}
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            value={datosColab.telefono}
            className="form-control"
            id="inputPhone"
            placeholder="Telefono"
            onChange={handleInputs}
          />
        </div>

        <div className="pt-4">
          <button className="btn btn-info " type="submit">
            Agregar Colaborador
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;

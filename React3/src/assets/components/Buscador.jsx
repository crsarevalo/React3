import React, { useState } from "react";

const Buscador = ({ data, dataFilter }) => {
  const [item, setItem ]= useState("")
  /* console.log("xxx", name ) */
  const inputHandle = (e) => {
    const find = item.toLowerCase();
    const result = data.filter(
      (item) =>
        item.nombre.toLowerCase().includes(find) ||
        item.edad.toLowerCase().includes(find) ||
        item.cargo.toLowerCase().includes(find) ||
        item.telefono.toLowerCase().includes(find) ||
        //faltaba el correo tambien aqui 
        item.correo.toLowerCase().includes(find)
    );
    dataFilter(result);};0

  return (
    
      <form onSubmit={inputHandle} >  
    <div className="pb-2 ">
      <input
        className="form-control "
        type="text"
        name="search"
        id="search"
        placeholder="Buscar Colaborador"
        onChange={(e) => setItem(e.target.value) }
        />
    </div>
        </form>
  );
};

export default Buscador;

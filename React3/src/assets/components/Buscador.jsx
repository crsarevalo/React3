import React, { useState } from "react";

const Buscador = ({ data, dataFilter }) => {
  // }}const [item, setItem] = useState("");
  /* console.log("xxx", name ) */
  const inputHandle = (e) => {
    const find = e.target.value.toLowerCase();
    const result = data.filter(
      (item) =>
        item.nombre.toLowerCase().includes(find) ||
        item.edad.toLowerCase().includes(find) ||
        item.cargo.toLowerCase().includes(find) ||
        item.telefono.toLowerCase().includes(find) ||
        //faltaba el correo tambien aqui
        item.correo.toLowerCase().includes(find)
    );
    dataFilter(result);
  };
  0;

  return (
    <div className="pb-2 ">
      <input
        className="form-control "
        type="text"
        name="search"
        id="search"
        placeholder="Buscar Colaborador"
        onChange={inputHandle}
      />
    </div>
  );
};

export default Buscador;

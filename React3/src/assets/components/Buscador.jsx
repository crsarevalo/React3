import React from "react";

const Buscador = () => {
  return (
    <div className="buscador col-12   col-md-8">
      <input
        className="form-control m-b2"
        type="text"
        name="search"
        id="search"
        placeholder="Buscar Colaborador"
      />
    </div>
  );
};

export default Buscador;

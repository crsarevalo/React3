import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./assets/components/Buscador";
import Formulario from "./assets/components/Formulario";
import Listado from "./assets/components/Listado";
import Alert from "./assets/components/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
function App() {
  const [data, setData] = useState(BaseColaboradores);
  const [dataFilter, setDataFilter] = useState(data);
  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <Buscador />
      <Listado data={data} />

      <Formulario />
    </>
  );
}

export default App;

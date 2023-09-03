import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Buscador from "./assets/components/Buscador";
import Formulario from "./assets/components/Formulario";
import Listado from "./assets/components/Listado";
import Alert from "./assets/components/Alert";
import { BaseColaboradores } from "./BaseColaboradores";
function App() {
  //Data original
  const [data, setData] = useState(BaseColaboradores);
// Data que viene filtrada
  const [dataFilter, setDataFilter] = useState(data);
  //aqui esta ceteada la alerta
  const [alert, setAlert] = useState({
  Texto:"", 
  tipo:"",
  estado: false
 })
 
 
  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <Buscador 
      data={data} 
      dataFilter={setDataFilter} 
      />

      <div className="#">

      <Listado
        data={data}
        dataFilter={dataFilter}
        setData={setData}
        setDataFilter={setDataFilter}
        />

      <Formulario />

      <Alert />
        </div>
    </>
  );
}

export default App;

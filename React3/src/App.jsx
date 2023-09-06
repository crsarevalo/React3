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
  const [dataFilter, setDataFilter] = useState(data);
  //aqui esta ceteada la alerta
  const [alert, setAlert] = useState({
    error: "",
    mensaje: "",
    color: "",
  });

  return (
    <>
      <h1>Lista de Colaboradores</h1>
      <Buscador data={data} dataFilter={setDataFilter} />
      <section>
        <div className="list">
          <Listado
            data={data}
            dataFilter={dataFilter}
            setData={setData}
            setDataFilter={setDataFilter}
          />
        </div>
        <div className="form">
          <Formulario
            data={data}
            dataFilter={dataFilter}
            setData={setData}
            setDataFilter={setDataFilter}
            setAlert={setAlert}
          />

          {alert.mensaje && (
            <Alert color={alert.color} mensaje={alert.mensaje} />
          )}
        </div>
      </section>
    </>
  );
}

export default App;

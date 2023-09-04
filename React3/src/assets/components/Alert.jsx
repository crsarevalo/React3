import React from "react";

const Alerta = ({ color, mensaje }) => {

 return (
  
<div>

<p className={color}>{mensaje}</p>

</div>

    
  );
};

export default Alerta;
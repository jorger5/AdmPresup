import React, { useContext} from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { numberWithCommas } from "../Utilidades/formateoNumeros";

// este componente indica los totales de las transacciones
export const GananciasGastos = () => {
  const { transacciones } = useContext(GlobalContext);
  const montos = transacciones.map(transacciones => transacciones.monto);


  const ingreso = montos
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const egreso = (
    montos.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);


    return (
    <div className="inc-exp-container">
        <div>
          <h4>Ingresos</h4>
          <p className="money ingreso">+${numberWithCommas(ingreso)}</p>
        </div>
        <div>
          <h4>Egresos</h4>
          <p className="money egreso">-${numberWithCommas(egreso)}</p>
        </div>
      </div>
    )
}

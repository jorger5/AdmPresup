import React, { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { numberWithCommas } from "../Utilidades/formateoNumeros";
import { formatFechas } from "../Utilidades/formateoFechas";




export const Transaccion = ({ transaccion }) => {
    const { borrarTransaccion } = useContext(GlobalContext);

    // En base a monto, coloca el signo + 
    const signo = transaccion.monto < 0 ? "" : "+";

    return (
        // Define la clase "minus" o "plus" dependiendo del signo
        <li className={transaccion.monto < 0 ? "egreso" : "ingreso" }>
            <span id="descrip">{transaccion.descripcion}</span> <span id="cat"> {transaccion.categoria} </span> <span id="monto">${signo}{numberWithCommas(transaccion.monto)}</span><span id="fechas"> {formatFechas(transaccion.fechaCreacion)} </span><button onClick={() => borrarTransaccion(transaccion._id)}  className="delete-btn">x</button>
        </li>
    )
}

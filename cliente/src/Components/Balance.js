import React, { useContext } from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { numberWithCommas } from "../Utilidades/formateoNumeros";


export const Balance = () => {
    const { transacciones } = useContext(GlobalContext);

    // Mapea todos los montos del objeto "transacciones" y los coloca en el array montos. Luego total reduce ese array y nos da hasta 2 decimlas
    const montos = transacciones.map(transacciones => transacciones.monto);
    const total = montos.reduce((acc, item) => (acc +=item), 0).toFixed(2);

    return (
        <>
        <h4>Tu saldo actual</h4>
        <h1>${numberWithCommas(total)}</h1>
        </>
    )
}

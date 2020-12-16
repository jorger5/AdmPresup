import React, { useContext, useEffect} from 'react';
import { GlobalContext } from "../Context/GlobalState";
import { Transaccion } from "./Transaccion";

export const ListaTransacciones = () => {
    // Trae el objeto transacciones
    const { transacciones, getTransacciones } = useContext(GlobalContext);

    useEffect(() => {
        getTransacciones();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [] );

    return (
        <>
        <h3>Historial de Transacciones</h3>
        <h1 className="clasificaciones">
            <span>Descripción</span>
            <span>Categoría</span>
            <span>Monto</span>
            <span id="date">Fecha</span>
        </h1>
        <ul className="list">
            {transacciones.map( transaccion => (<Transaccion key={transaccion.id} transaccion={transaccion} /> ))}
        </ul>
        </>
    )
}

import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// Estado inicial
const initialState = {
    transacciones: [],
    error: null,
    loading: true
}


// Creación de contexto

export const GlobalContext = createContext(initialState);

// Componente provider
// Con provider le pasamos cualquier estado, acción al os componentes wrapped, en este caso los componentes de app.js

export const GlobalProvider = ({children}) => {
    const [state,dispatch] = useReducer ( AppReducer, initialState);


    // Acciones (que activan el Reducer)

    async function getTransacciones() {
        try {
            const res = await axios.get("/api/v1/transacciones"); //vamos con await porque axios trabaja con promises

            dispatch({  // con esto enviamos la respuesta al estado
                type: "GET_TRANSACCIONES",
                payload: res.data.data
            });
        } catch (err) {
            dispatch({  
                type: "TRANSACCION_ERROR",
                payload: err.response.data.error
            });
            
        }
    }

    async function borrarTransaccion(id) {
        try {
            await axios.delete(` api/v1/transacciones/${id}` );
            
            dispatch({
                type: "BORRAR_TRANSACCION",
                payload: id
            });
        } catch (err) {
            dispatch({  
                type: "TRANSACCION_ERROR",
                payload: err.response.data.error
            });
            
        }

    }
    async function sumarTransaccion(transaccion) {
        const config = {
            headers: {
                "Content-Type": "application/json"
            }
        }
        try {
            const res = await axios.post("api/v1/transacciones", transaccion, config);

            dispatch({
                type: "SUMAR_TRANSACCION",
                payload: res.data.data
            });
        } catch (err) {
            dispatch({  
                type: "TRANSACCION_ERROR",
                payload: err.response.data.error
            });         
        }
    }

// Esto es lo que entrega el provider
    return (<GlobalContext.Provider value={{
        transacciones: state.transacciones,
        error: state.error,
        loading: state.loading,
        getTransacciones,
        borrarTransaccion,
        sumarTransaccion
    }}>
        {children}
    </GlobalContext.Provider>)
}
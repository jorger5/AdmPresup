// Un reducer es cómo especificamos los cambios de state de la aplicación en respuesta a algunas acciones.
export default (state, action) => {
    switch(action.type)  {
        case "GET_TRANSACCIONES":
            return {
                ...state,
                loading: false,  //aqui es falso porque ya las transacciones fueron enviadas / recibidas
                transacciones: action.payload
            }
        case "BORRAR_TRANSACCION":
            return {
                ...state,
                transacciones: state.transacciones.filter(transaccion => transaccion._id !== action.payload)
            }
        case "SUMAR_TRANSACCION":
            return{
                ...state,
                transacciones: [...state.transacciones, action.payload] // el array se va llenando en base a lo que ya esta y luego viene a nueva.
            }
        case "ERROR_TRANSACCION":
            return {
                ...state,
                error: action.payload
            }
        default:
            return state;
    }
}
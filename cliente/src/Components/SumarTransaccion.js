import React, {useState, useContext} from 'react';
import { GlobalContext } from "../Context/GlobalState";


export const SumarTransaccion = () => {
    const [descripcion, setDescripcion] = useState("");
    const [categoria, setCategoria] = useState("");
    const [monto, setMonto] = useState("");
    const [fechaCreacion, setFechaCreacion] = useState("");

    const { sumarTransaccion } = useContext(GlobalContext);
    const  onSubmit = e =>{
      e.preventDefault();
      const nuevaTransaccion = {
        id: "t"+Math.floor(Math.random()*10000000),
        descripcion,
        categoria,
        monto: +monto,
        fechaCreacion
        }

        sumarTransaccion(nuevaTransaccion);
    }

    return (
        <>
        <h3>Añade una nueva transacción</h3>
        {/* Form para introducir datos */}
        <form onSubmit={onSubmit} className="formularios">
              {/* DESCRIPCIÓN */}
          <div >
            <label htmlFor="text">Descripción:</label>
            {/* Este input tendrá el valor de text y con un evento se pondra el valor que tipeemos */}
            <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)} placeholder="Describe la transacción..." />
          </div>

              {/* CATEGORIA */}
              <div >
            <label htmlFor="text">Categoria:</label>
            {/* Este input tendrá el valor de text y con un evento se pondra el valor que tipeemos */}
            <input type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} placeholder="¿Qué categoría es?" />
          </div>

              {/* MONTO */}
          <div >
            <label htmlFor="amount" >Monto: 
            <br />
              Positivo si es ingreso, negativo si es egreso</label>
            <input type="number" value={monto} onChange={(e) => setMonto(e.target.value)} placeholder="Introduce el monto..." />
          </div>

              {/* FECHA */}
          <div >
            <label htmlFor="date" >Fecha de operación: </label>
            <br />
            <input type="date" value={fechaCreacion} onChange={(e) => setFechaCreacion(e.target.value)} placeholder="Introduce fecha de operación" />
          </div>

              {/* BOTON DE SUBMIT */}
          <button className="btn">Enviar transacción </button>
         </form>
        </>
    )
}

const { find } = require("../modelos/Transaccion");
const Transaccion = require( "../modelos/Transaccion");

// Aqui van todos los methods que van a interactuar con la DB


// Obtiene todas las transacciones
// Ruta: GET /api/v1/transacciones
// Con una promesa buscamos todas las transacciones en el modelo

exports.getTransacciones = async (req, res, next) => {
    try {
        const transacciones = await Transaccion.find();

        return res.status(200).json({  //código 200 de success
            success: true,
            count: transacciones.length, //esto nos dice cuantas transacciones van
            data: transacciones
        })
    } catch (err) {
        return res.status(500).json({   // código 500 de server error
            success: false,
            error: "Error en el servidor"
        });
    }

}

// Añade transacciones
// Ruta: POST /api/v1/transacciones

exports.addTransacciones = async (req, res, next) => {
    try {
        const { descripcion, categoria, monto,fechaCreacion } = req.body;  //esto es lo que requiere el modelo

        const transaccion = await Transaccion.create(req.body);

        return res.status(201).json({   //código 201 de send success
            success: true,
            data: transaccion

        });
    } catch (err) {
      if( err.name === "ValidationError" ) { 
          const messages = Object.values(err.errors).map(val => val.message);

          return res.status(400).json({ //codigo 400 es error en el cliente
              success: false,
              error: messages
          })
      } else {
        return res.status(500).json({   // código 500 de server error
            success: false,
            error: "Error en el servidor"
        });
      }
    }
 
}

// Borra transacciones
// Ruta: DELETE /api/v1/transacciones/:id

exports.deleteTransacciones = async (req, res, next) => {
    try {
        const transaccion = await Transaccion.findById(req.params.id);  //esto permite acceder según el id que se introdujo. El findById se llama del Modelo.

        if( !transaccion ){
            return res.status(404).json({
                success: false,
                error: "No se encontró transacción"
            });
        }

        await transaccion.remove(); //este método se llama del resource, o sea de lo que se extrae de la DB.

        return res.status(200).json({
            success: true,
            data: {}
        })

    } catch (error) {
        return res.status(500).json({   // código 500 de server error
            success: false,
            error: "Error en el servidor"
        });   
    }

}
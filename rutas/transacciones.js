const express = require("express");
const router = express.Router();
const { getTransacciones, addTransacciones, deleteTransacciones } = require("../controladores/ctrlTransacciones");


//  "/" representa /api/v1/transacciones
router
    .route("/")
    .get(getTransacciones)
    .post(addTransacciones);

router
    .route("/:id")
    .delete(deleteTransacciones);


module.exports = router;
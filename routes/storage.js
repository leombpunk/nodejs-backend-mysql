const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/storage");
const { validatorGetItem } = require("../validators/tracks");

router.get("/", getItems);
router.get("/:id", validatorGetItem, getItem);
// .single() para enviar solo un archivo
// .multi() para enviar mas de un archivo
// myfile es el nombre del archivo que se le asigna cuando es enviado por postman o por el front
router.post("/", uploadMiddleware.single("myfile"), createItem);
// router.put("/:id", updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router;
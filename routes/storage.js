const express = require("express");
const router = express.Router();
const uploadMiddleware = require("../utils/handleStorage");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/storage");

router.get("/", (req, res) => {
  const data = ["hola", "mundo"];
  res.send({ data });
});

// .single() para enviar solo un archivo
// .multi() para enviar mas de un archivo
// myfile es el nombre del archivo que se le asigna cuando es enviado por postman o por el front
router.post("/", uploadMiddleware.single("myfile"), createItem);

module.exports = router;
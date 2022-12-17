const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/session");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
const { getItems, getItem, createItem, updateItem, deleteItem } = require("../controllers/tracks");

router.get("/", authMiddleware, getItems);//no necesita validar nada
router.get("/:id", validatorGetItem, getItem);
router.post("/", validatorCreateItem, createItem);
router.put("/:id", validatorCreateItem, validatorGetItem, updateItem);
router.delete("/:id", validatorGetItem, deleteItem);

module.exports = router
const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");

const getItems = async (req, res) => {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "error en el get pe");
  }
};

const getItem = async (req, res) => {
  try {
    req = matchedData(req); //filtra/sanitiza el 'request'
    const { id } = req;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "error al getear el item");
  }
};

const createItem = async (req, res) => {
  try {
    const body = matchedData(req); //matchedData (de express-validator) sanitisa lo que recibe el controllador desde el frontend
    console.log(body);
    //esto es para mongo, como no tengo el modelo creado
    //lo voy a poner igual como referencia y ya luego lo cambiare
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "error al crear el item");
  }
};

const updateItem = async (req, res) => {
  try {
    //extrae el id y el resto lo pone en la variable body
    const { id, ...body } = matchedData(req); //matchedData (de express-validator) sanitisa lo que recibe el controllador desde el frontend
    //esto es para mongo, como no tengo el modelo creado
    //lo voy a poner igual como referencia y ya luego lo cambiare
    const data = await tracksModel.findOneAndUpdate(id, body);
    res.send({ data });
  } catch (e) {
    handleHttpError(res, "error al actualizar el item");
  }
};

const deleteItem = async (req, res) => {
  try {
    req = matchedData(req); //filtra/sanitiza el 'request'
    const { id } = req;
    //luego se va a aplicar soft delete, borrado lógico
    const data = await tracksModel.deleteOne({ _id: id }); //esto es para mongoDB
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "error al borrar el item");
  }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };

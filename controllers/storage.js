const fs = require("fs");
const { storageModel } = require("../models");
const { handleHttpError } = require("../utils/handleError");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const getItems = async (req, res) => {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "error en el get pe");
  }
};

const getItem = async (req, res) => {
  try {
    req = matchedData(req); //filtra/sanitiza el 'request'
    const { id } = req;
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "error al getear el item");
  }
};

const createItem = async (req, res) => {
  const { body, file } = req;
  console.log(body);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  //esto es para mongo, como no tengo el modelo creado
  //lo voy a poner igual como referencia y ya luego lo
  //cambiare
  //const data = await storageModel.create(fileData);
  //res.send({ data });
  res.send({ body });
};

// const updateItem = async (req, res) => {};

const deleteItem = async (req, res) => {
  try {
    const { id } = matchedData(req); //filtra/sanitiza el 'request'
    const dataFile = await storageModel.findById(id);
    await storageModel.deleteOne(id);//borra el archivo del a base de datos en mongo (**NO** borrado lógico)
    const {filename} = dataFile; //captura el nombre del archivo
    const filePath = `${MEDIA_PATH}/${filename}`;//lo concatena a la ruta absoluta
    fs.unlinkSync(filePath);//para borrar fisicamente el archivo del disco duro a traves de la ruta absoluta
    const data = {
      filePath,
      deleted: 1
    };
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "error al getear el item");
  }
};

module.exports = { getItems, getItem, createItem, /*updateItem,*/ deleteItem };

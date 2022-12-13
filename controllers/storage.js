const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;

const getItems = async (req, res) => {
  const data = await storageModel.find({});
  res.send({ data });
};

const getItem = (req, res) => {

};

const createItem = async (req, res) => {
  const { body, file } = req;
  console.log(body);
  const fileData = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`
  }
  //esto es para mongo, como no tengo el modelo creado
  //lo voy a poner igual como referencia y ya luego lo
  //cambiare
  //const data = await storageModel.create(fileData);
  //res.send({ data });
  res.send({ body });
};

const updateItem = (req, res) => {

};

const deleteItem = (req, res) => {
    
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
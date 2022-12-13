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
const getItem = (req, res) => {

};

const createItem = async (req, res) => {
  try { 
    const body = matchedData(req); //matchedData (de express-validator) sanitisa lo que recibe el controllador desde el frontend
    console.log(body);
    //esto es para mongo, como no tengo el modelo creado
    //lo voy a poner igual como referencia y ya luego lo cambiare
    //const data = await tracksModel.create(body);
    //res.send({ data });
    res.send({ body });
  } catch (e) {
    handleHttpError(res, "error al crear el item");
  }
  
};

const updateItem = (req, res) => {

};

const deleteItem = (req, res) => {
    
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");
const Storage = require("./storage");

const Tracks = sequelize.define(
  "tracks",
  {
    nombre: { type: DataTypes.STRING, allowNull: false },
    album: { type: DataTypes.STRING },
    caratula: { type: DataTypes.STRING },
    artista_nombre: { type: DataTypes.STRING },
    artista_nickname: { type: DataTypes.STRING },
    artista_nacionalidad: { type: DataTypes.STRING },
    duracion_start: { type: DataTypes.INTEGER },
    duracion_end: { type: DataTypes.INTEGER },
    mediaId: { type: DataTypes.STRING },
  },
  {
    timestamps: true,
  }
);

//nuevo
//implementando modelo personalizado
//findAllData es el nombre que le doy a la funcion, no es una funcion de sequelize
Tracks.findAllData = function () {
  Tracks.belongsTo(Storage, {
    foreignKey: "mediaId",
    as: "audio", //alias
  });
  return Tracks.findAll({ include: "audio" });
};

Tracks.findOneData = function (id) {
  Tracks.belongsTo(Storage, {
    foreignKey: "mediaId",
    as: "audio",
  });
  return Tracks.findOne({ where: { id }, include: "audio" });
};

module.exports = Tracks;

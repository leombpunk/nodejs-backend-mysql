const { sequelize } = require("../config/mysql");
const { DataTypes } = require("sequelize");

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

module.exports = Tracks;

const { DataTypes } = require("sequelize");

const ratingModel = (db) => {
  return db.define("Rating", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

module.exports = { ratingModel };

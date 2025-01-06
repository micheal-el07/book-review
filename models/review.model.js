const { DataTypes } = require("sequelize");

const reviewModel = (db) => {
  return db.define("Review", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bookId: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};

module.exports = { reviewModel };

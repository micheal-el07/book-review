const { DataTypes } = require("sequelize");

const bookModel = (db) => {
  return db.define("Book", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    bookName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    bookImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bookAuthor: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};

module.exports = { bookModel };

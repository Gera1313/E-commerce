const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

// define columns
ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      },
      product_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'product',
        }
      },
      tag_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'tag'
        }
      }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;

// Worked on this file. Llines 7-28.
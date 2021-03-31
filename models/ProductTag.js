const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model { }

ProductTag.init(
  {
    // define columns
    /*
    * `ProductTag`
  * `id`
    * Integer.
    * Doesn't allow null values.
    * Set as primary key.
    * Uses auto increment.
  * `product_id`
    * Integer.
    * References the `Product` model's `id`.
  * `tag_id`
    * Integer.
    * References the `Tag` model's `id`.
    */
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataType.INTEGER,
      //references the 'product' model's 'id',
      references: {
        model: 'product',
        key: 'id',
      },
    },
    tag_id: {
      type: DataTypes.INTEGER,
      //references the 'tag' model's id'
      references: {
        model: 'tag',
        id: 'id',
      },
    },
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

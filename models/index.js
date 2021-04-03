// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category - Activity 21
Product.belongsTo(Category, {
  //foreignKey is referencing the model on the left side of the 'belongsTo'
  foreignKey: 'category_id',
});

// Categories have many Products - Activity 23 
Category.hasMany(Product, {
  //foreignKey is referencing the model on the right side of 'hasMany'
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  //listing from and to models and further defining the through route below.
  //----NEED TO CONFIRM **UNIQUE**.
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'product_Tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  //listing from and to models and further defining the through route below.
  //----I NOW SUSPECT THAT UNIQUE MANY MEAN A ONE WAY ONE TO MANY RELATIONSHIP.
  through: {
    model: ProductTag,
    unique: false
  },
  as: 'tagged_Product'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

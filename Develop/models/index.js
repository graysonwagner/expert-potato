// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

Category.hasMany(Product, {
  foreignKey: 'category_id',
});

// foreign key tag

//foreign key ProductTag

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};

const Product = require('models/product');

exports.write = async ctx => {
  const { id, image, liked, likedCount, mobileUrl, price, shopId, shopName, title, url } = ctx.request.body;

  const product = new Product({
      id, image, liked, likedCount, mobileUrl, price, shopId, shopName, title, url
  });

  try {
    await product.save();
    ctx.body = product;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.list = async (ctx) => {
  try {
    const products = await Product.find();
    ctx.body = products;
  } catch(e) {
    ctx.throw(e, 500);
  }
};

exports.remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Product.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
};
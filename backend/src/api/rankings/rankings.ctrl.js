const Ranking = require('models/ranking');

exports.write = async ctx => {
  const { description, id, image, liked, name, SecondName, url } = ctx.request.body;

  const ranking = new Ranking({ description, id, image, liked, name, SecondName, url });

  try {
    await ranking.save();
    ctx.body = ranking;
  } catch (e) {
    ctx.throw(e, 500);
  }
};

exports.list = async (ctx) => {
  try {
    const rankings = await Ranking.find();
    ctx.body = rankings;
  } catch(e) {
    ctx.throw(e, 500);
  }
};

exports.remove = async ctx => {
  const { id } = ctx.params;
  try {
    await Ranking.findByIdAndRemove(id).exec();
    ctx.status = 204;
  } catch (e) {
    ctx.throw(e, 500);
  }
};
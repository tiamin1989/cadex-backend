const router = require('express').Router();

const {
  getCube,
} = require('../controllers/cube');

router.post('/cube', celebrate({
  headers: Joi.object().keys({
    body: Joi.object().keys({
      length: Joi.number().required(),
      width: Joi.number().required(),
      height: Joi.number().required(),
    }),
  }).unknown(true),
}), getCube);

module.exports = {
  router,
};

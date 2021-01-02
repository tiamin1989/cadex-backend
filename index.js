const express = require('express');
const { PORT } = require('./utils/config.js');
const app = express();
const { errors } = require('celebrate');
const { ERR_PAGE_NOT_FOUND } = require('./utils/constants');
const bodyParser = require('body-parser');
const cubeRouter = require('./routes/cube.js').router;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(cubeRouter);

app.use('/*', () => {
  throw new NotFoundError(ERR_PAGE_NOT_FOUND);
});

app.use(errors());

app.use((err, req, res) => {
  const { statusCode = 500, message = 'Произошла ошибка' } = err;
  res.status(statusCode).send({ message: statusCode === 500 ? 'На сервере произошла ошибка' : message });
});

app.listen(process.env.PORT ? process.env.PORT : PORT, () => {
  console.log(`Приложение запущено в режиме ${process.env.NODE_ENV ? process.env.NODE_ENV : 'development'}, порт: ${process.env.PORT ? process.env.PORT : PORT}`);
});

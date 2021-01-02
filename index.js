const express = require('express');
const { PORT } = require('./utils/config.js');
const app = express();

const cubeRouter = require('./routes/cube.js').router;

app.use(cubeRouter);

app.use('/*', () => {
  throw new NotFoundError(ERR_PAGE_NOT_FOUND);
});

app.listen(process.env.PORT ? process.env.PORT : PORT, () => {
  console.log(`Приложение запущено в режиме ${process.env.NODE_ENV ? process.env.NODE_ENV : 'development'}, порт: ${process.env.PORT ? process.env.PORT : PORT}`);
});

const getCube = (req, res) => {
  const cube = {
    length: req.body.length,
    width: req.body.width,
    height: req.body.height,
  };
  res.status(200).send(cube);
};

module.exports = {
  getCube,
};

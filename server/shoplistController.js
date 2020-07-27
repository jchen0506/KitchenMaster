const client = require('../database/index.js');

module.exports = {
  addOne: (req, res) => {
    var item = req.query.item;
    client.set(item, 1, (err, response) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).send(response);
      }
    });
  },

  deleteOne: (req, res) => {
    var item = req.query.item;
    client.del(item, (err, response) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).json(response);
      }
    });
  },

  getList: (req, res) => {
    client.keys('*', (err, response) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(201).json(response);
      }
    });
  },
};

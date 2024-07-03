"use strict";
let Models = require("../models"); // matches index.js

// finds all plants in DB
const getPlants = (res) => {
  Models.plant
    .find({})
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

//uses JSON from request body to create new Plant in DB
const createPlant = (data, res) => {
  Models.plant
    .create(data)
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// uses JSON from request body to update plan ID from params
const updatePlant = (req, res) => {
  Models.plant
    .update(req.body, {
      where: { id: req.params.id },
      returning: true,
    })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

// deletes plant matching ID from params
const deletePlant = (req, res) => {
  Models.plant
    .destroy({ where: { id: req.params.id } })
    .then((data) => {
      res.send({ result: 200, data: data });
    })
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  getPlants,
  createPlant,
  updatePlant,
  deletePlant,
};

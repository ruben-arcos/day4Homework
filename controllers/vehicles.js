const vehicles = require("../data/vehicles");

/************************************/

const list = (req, res) => {
  console.log("GET /vehicles");
  res.json(vehicles);
};

/************************************/

const show = (req, res) => {
  let myId = req.params.id;

  let matchingItem = vehicles.find((item, index) => {
    return item._id == myId;
  });
  if (matchingItem) {
    res.json(matchingItem);
  } else {
    res.sendStatus(404);
  }
};

/************************************/

const create = (req, res) => {
  let newItem = {};

  newItem._id = randomInt();
  newItem.imgUrl = req.body.imgUrl;
  newItem.year = req.body.year;
  newItem.make = req.body.make;
  newItem.model = req.body.model;
  newItem.price = req.body.price;
  newItem.km = req.body.km;
  newItem.miles = req.body.miles;
  newItem.fuel = req.body.fuel;
  newItem.city = req.body.city;
  newItem.isNew = req.body.isNew;

  vehicles.push(newItem);

  res.json(vehicles);
};

/************************************/

const randomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);
  
    return randomInt;
  };

module.exports = {
  list,
  show,
  create
};

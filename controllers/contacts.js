const products = require("../data/products");

/************************************/

const list = (req, res) => {
  console.log("GET /contacts");
  res.json(contacts);
};

/************************************/

const show = (req, res) => {
  let myId = req.params.id;

  let matchingItem = contacts.find((item, index) => {
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
  newItem.name = req.body.name;
  newItem.occupation = req.body.occupation;
  newItem.avatar = req.body.avatar;

  contacts.push(newItem);

  res.json(contacts);
};

/************************************/

module.exports = {
  list,
  show,
  create,
};

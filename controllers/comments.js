const comments = require("../data/comments");

/************************************/

const list = (req, res) => {
  console.log("GET /comments");
  res.json(comments);
};

/************************************/

const show = (req, res) => {
  let myId = req.params.id;

  let matchingItem = comments.find((item, index) => {
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
  newItem.body = req.body.body;
  newItem.postId = 1;

  comments.push(newItem);

  res.json(comments);
};

/************************************/

module.exports = {
  list,
  show,
  create,
};

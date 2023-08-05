const express = require("express");
const router = express.Router();

const commentsController = require("../controllers/vehicles");

/************************************/
routes.get("/comments", commentsController.list);

routes.get("/comments/:id", commentsController.show);

routes.post("/comments", commentsController.create);

/************************************/

module.exports = router;

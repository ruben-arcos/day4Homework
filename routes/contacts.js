const express = require("express");
const router = express.Router();

const contactsController = require("../controllers/contacts");

/************************************/

routes.get("/contacts", contactsController.list);

routes.get("/contacts/:id", contactsController.show);

routes.post("/contacts", contactsController.create);

/************************************/

module.exports = router;

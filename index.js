const express = require("express");
const app = express();
const contacts = require("./data/contacts");
const vehicles = require("./data/vehicles");
const comments = require("./data/comments");
const products = require("./data/products");
app.use(express.static("public"));
app.use(express.json());

const port = process.env.PORT || 5001;

//routes
/************************************/
//get all
app.get("/contacts", (req, res) => {
  console.log("GET /contacts");
  res.json(contacts);
});

//get item by id
app.get("/contacts/:id", (req, res) => {
    let myId = req.params.id

    let matchingItem = contacts.find((item, index) => {
        return item._id == myId
    })
    if(matchingItem) {
        res.json(matchingItem)
    } else {
        res.sendStatus(404)
    }
})

// * Add `app.post()` routes for the following:
//   * "/contacts"
//   * "/vehicles"
//   * "/comments"
//   * "/products"
// * Add the information from the body to the appropriate array
//   * Figure out how to increment each `_id` by one and add this _id to "req.body"
//   * Add `postId: 1` to "req.body"
//   * Finally.. `<ARRAY>.push(req.body)`

//add content
app.post("/contacts", (req, res) => {
    let newItem = {}

    newItem._id = randomInt()
    newItem.name = req.body.name
    newItem.occupation = req.body.occupation
    newItem.avatar = req.body.avatar

    contacts.push(newItem)

    res.json(contacts)
})

/************************************/

app.get("/vehicles", (req, res) => {
  console.log("GET /vehicles");
  res.json(vehicles);
});

app.get("/vehicles/:id", (req, res) => {
    let myId = req.params.id

    let matchingItem = vehicles.find((item, index) => {
        return item._id == myId
    })
    if(matchingItem) {
        res.json(matchingItem)
    } else {
        res.sendStatus(404)
    }
})

app.post("/vehicles", (req, res) => {
    let newItem = {}

    newItem._id = randomInt() 
    newItem.imgUrl = req.body.imgUrl
    newItem.year = req.body.year
    newItem.make = req.body.make
    newItem.model = req.body.model
    newItem.price = req.body.price
    newItem.km = req.body.km
    newItem.miles = req.body.miles
    newItem.fuel = req.body.fuel
    newItem.city = req.body.city
    newItem.isNew = req.body.isNew
  
    vehicles.push(newItem)

    res.json(vehicles)
})




/************************************/

app.get("/comments", (req, res) => {
  console.log("GET /comments");
  res.json(comments);
});

app.get("/comments/:id", (req, res) => {
    let myId = req.params.id

    let matchingItem = comments.find((item, index) => {
        return item._id == myId
    })
    if(matchingItem) {
        res.json(matchingItem)
    } else {
        res.sendStatus(404)
    }
})

app.post("/comments", (req, res) => {
    let newItem = {}

    newItem._id = randomInt() 
    newItem.body = req.body.body
    newItem.postId = 1
  

    comments.push(newItem)

    res.json(comments)
})

/************************************/

app.get("/products", (req, res) => {
    console.log("GET /products");
    res.json(products);
  });

  app.get("/products/:id", (req, res) => {
    let myId = req.params.id

    let matchingItem = products.find((item, index) => {
        return item._id == myId
    })
    if(matchingItem) {
        res.json(matchingItem)
    } else {
        res.sendStatus(404)
    }
})

app.post("/products", (req, res) => {
    let newItem = {}

    newItem._id = randomInt() 
    newItem.name = req.body.name
    newItem.description = req.body.description
    newItem.rating = req.body.rating
    newItem.imgUrl = req.body.imgUrl
    newItem.price = req.body.price
    newItem.category = req.body.category
    newItem.reviews = req.body.reviews
  
    products.push(newItem)

    res.json(products)
})




/************************************/

const randomInt = () => {
    let randomFloat = Math.random();
    let bigRandomFloat = randomFloat * 100000;
    let randomInt = Math.floor(bigRandomFloat);
  
    return randomInt;
  };

app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});

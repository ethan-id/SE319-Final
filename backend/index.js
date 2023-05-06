const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Cluster66410:inanpw6102019@cluster66410.xd7ic8y.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "reactdata",
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const port = process.env.PORT || 4000;
const host = "localhost";
app.listen(port, () => {
  console.log(`App listening at http://%s:%s`, host, port);
});

// const Products = require("./dataSchema");
const ShAmazon = require("./schema");

app.get("/", async (req, resp) => {
  const query = {};
  const allProducts = await ShAmazon.find(query);
  console.log(allProducts);
  resp.send(allProducts);
});

app.get("/:id", async (req, resp) => {
  const prodId = Number(req.params.id);
  const query = { id: prodId };
  const oneProduct = await ShAmazon.findOne(query);
  console.log(oneProduct);
  resp.send(oneProduct);
});

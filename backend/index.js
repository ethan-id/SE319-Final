const express = require("express");
const mongodb = require("mongodb");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://Cluster66410:se319mongo@cluster66410.xd7ic8y.mongodb.net/?retryWrites=true&w=majority",
  {
    dbName: "test",
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
// const ShAmazon = require("./schema");
const ShAmazon = require("./shamazonSchema");

app.get("/", async (req, resp) => {
  const query = {};
  const allProducts = await ShAmazon.find(query);
  const count = await ShAmazon.countDocuments(query)
  console.log(allProducts);
  console.log(count);
  resp.send(allProducts);
});

// app.get("/:category", async (req, resp) => {
//   const cat = req.params.category;
//   const query = { category: cat };
//   const productsInCategory = await ShAmazon.find(query);
//   console.log(productsInCategory);
//   resp.send(productsInCategory);
// });

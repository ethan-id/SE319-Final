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

const ShAmazon = require("./shamazonSchema");

app.get("/", async (req, resp) => {
  const query = {};
  const allProducts = await ShAmazon.find(query);
  console.log("Fetched all items");
  resp.send(allProducts);
});

app.delete("/delete", async (req, resp) => {
  if (req.body.uniq_id) {
    console.log("Item exists");
    console.log(req.body.uniq_id);
  } else {
    console.log("Item doesn't exist");
  }
  const item = await ShAmazon.findOneAndDelete({uniq_id: req.body.uniq_id});
  console.log("Deleted item with uniq_id: " + item.uniq_id);
});

const port = process.env.PORT || 4000;
const host = "localhost";
app.listen(port, () => {
  console.log(`App listening at http://%s:%s`, host, port);
});

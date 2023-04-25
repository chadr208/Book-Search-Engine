const express = require("express");
const colors = require("colors");
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 3001;

const app = express();

//Connect Database
connectDB();

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: process.env.NODE_ENV === "development",
  })
);

// point to dist folder
app.use(express.static(path.join(__dirname, "../client/build")));

app.get("/", (req, res) =>
  res.sendFile(__dirname, "../client/build/index.html")
);

app.listen(port, console.log(`Server started on port ${port}`));

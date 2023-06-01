const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const cors = require('cors');
const { Db, MongoDBNamespace } = require("mongodb")
const userRoute = require("./route/users")
const authRoute = require("./route/auth")
const postRoute = require("./route/posts")
const commentRoute = require("./route/comments")
dotenv.config()


const database = (module.exports = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      process.env.MONGO_URL,
      connectionParams
    );
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
});

database();
//middleware
app.use(express.json())
app.use(helmet())
app.use(morgan("common"))
app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)
app.use("/api/posts", postRoute)
app.use("/api/comments", commentRoute)
app.use(function (req, res, next) {
  // Set the Access-Control-Allow-Origin header to "" to allow requests from any origin.
  res.header('Access-Control-Allow-Origin', '');

  // Set the Access-Control-Allow-Headers header to allow the Content-Type header.
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  // Set the Access-Control-Allow-Methods header to allow the GET, POST, PUT, DELETE, and OPTIONS methods.
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');

  // Set the Access-Control-Max-Age header to 1 hour to cache the CORS response.
  res.header('Access-Control-Max-Age', 3600);

  next();
});
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});


app.listen(1812, () => {
  console.log("Backend is running")
})
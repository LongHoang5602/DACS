const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgan = require("morgan")
const { Db, MongoDBNamespace } = require("mongodb")
const userRoute = require("./route/users")
const authRoute = require("./route/auth")
const postRoute = require("./route/posts")
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
app.use("/api/users",userRoute)
app.use("/api/auth",authRoute)
app.use("/api/posts",postRoute)
// app.get("/", (req, res) => {
//   res.send("Hello homepage")
// })
// app.get("/users", (req, res) => {
//   res.send("Hello userpage")
// })

app.listen(1812, () => {
  console.log("Backend is running")
})
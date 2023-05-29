const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes")

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/netflix", {
  // userNewUrlParser: true,
  useUnifiedTopology: true
}).then(() =>{
  console.log("DB Connected")
})

// why write /api/user
app.use("/api/user",userRoutes);

app.listen(5000, console.log("server is running on port 5000"));
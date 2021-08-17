const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser");
const studentRoutes = require("./routes/studentRoutes");
// const studentModel = require("./models/studentModel");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({ extended: true }));
app.use("/students", studentRoutes);

mongoose
  .connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.listen(port, () => console.log(`Server is running at http://localhost:${port}`)))
  .catch((err) => console.log(err));


mongoose.set("useFindAndModify",false);
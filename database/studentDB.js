import mongoose from "mongoose";

module.exports = function studentDB() {
mongoose
  .connect("mongodb://localhost:27017/studentDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

mongoose.set("useFindAndModify", false);
}




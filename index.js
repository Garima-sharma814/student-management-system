import express from "express";
import cors from "cors";
import studentDB from "./database/studentDB";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));

app.use(cors());
app.use("/students", require("./routes/studentRoutes"));

// MongoDb connection
studentDB();

// listening the server
app.listen(port, () => console.log(`Server id sunning at ${port}`));

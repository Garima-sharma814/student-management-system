const express = require('express');
const cors = require('cors');
const studentDB = require('./database/studentDB');

const app = express();
const port = process.env.PORT || 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '20mb', extended: true }));

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Student Routes
app.use('/students', require('./routes/studentRoutes'));

// MongoDb connection
studentDB();

// listening the server
app.listen(port, () => console.log(`Server is running at ${port}`));

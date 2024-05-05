const express = require("express");
const mongoose = require("mongoose");
const Time = require('./middleware/Time')

const cors = require("cors");
const dishes = require("./Routes/dishRoutes");
// const userRoutes = require("./routes/userRoutes");
const Auth = require("./Routes/Auth");
require("dotenv").config();

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.use(Time);

app.use("/api", dishes);
app.use('/api/auth', require('./Routes/Auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

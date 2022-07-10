const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const homeRoute = require("./routes/home");
const cors = require("cors");

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

app.use("/api/v1/", homeRoute);

mongoose.connect(process.env.MONGO_URL);

app.listen(process.env.PORT || 4000);

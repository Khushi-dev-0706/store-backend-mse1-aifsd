require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const productRoutes = require("./routes/productRoutes");
app.use("/api", productRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log("Mongo Connected"))
.catch(err => console.log(err));

app.listen(5000, ()=> console.log("Server running"));

const errorHandler = require("./middleware/errorMiddleware");
app.use(errorHandler);
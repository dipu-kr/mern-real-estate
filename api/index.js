import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

mongoose
  .connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongodb connected successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB: ", err);
  });

const app = express();

app.listen(5000, () => {
  console.log("server runnning on port on 5000 !!!");
});

import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import { mongoose } from "mongoose";

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Hello");
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("Database connected");
        app.listen(PORT, () => {
          console.log(`App is listening to: ${PORT}`);
        });
    })
    .catch(() => {
        console.log(error);
    });
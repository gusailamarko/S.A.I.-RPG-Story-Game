import express from "express";
import { createRequestHandler } from "@react-router/express";

const app = express();
const port = 3000; //Port will be imported from the .env file in the future

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})
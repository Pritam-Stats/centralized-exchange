import express from "express";
import {env} from "./utils/env";
const app = express();

app.get("/", (req, res) => {
    res.send("Hello Home Page")
})

app.listen(env.port, () => {console.log(`Server running at ${env.port}`)})
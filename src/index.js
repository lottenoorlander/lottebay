const express = require("express");
const app = express();
const port = 4000;
const AdvertisementRouter = require("./advertisements/router");

const cors = require("cors");
const corsMiddleware = cors();
app.use(corsMiddleware);

const bodyParser = require("body-parser");
const bodyParserMiddleWare = bodyParser.json();
app.use(bodyParserMiddleWare);

app.use(AdvertisementRouter);

app.get("/", (req, res) => res.send("Welcome to the Lottebay API!"));

app.listen(port, () => console.log(`Listening on port ${port}!`));

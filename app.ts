// lib/app.ts
import dotenv from "dotenv";
import express from "express";
import * as bodyParser from "body-parser";

import { Database } from "./src/models/Database";
import apiRouter from "./src/routes/Api";

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;
const apiPrefix = process.env.API_PREFIX;
const version = process.env.VERSION;

// Create a new express application instance
const app: express.Application = express();

Database.init();

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(`/${apiPrefix}/${version}`, apiRouter);

app.listen(port, function() {
  console.log("Users app listening on port 3000!");
});

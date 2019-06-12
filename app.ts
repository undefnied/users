// lib/app.ts
import dotenv from "dotenv";
import express from 'express';

import apiRouter from './src/routes/Api';

// initialize configuration
dotenv.config();

const port = process.env.SERVER_PORT;
const apiPrefix = process.env.API_PREFIX;
const version = process.env.VERSION;

// Create a new express application instance
const app: express.Application = express();

app.use(`/${apiPrefix}/${version}`, apiRouter);

app.listen(port, function () {
  console.log('Users app listening on port 3000!');
});
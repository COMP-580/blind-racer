import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as path from "path";
import * as favicon from "serve-favicon";
import * as uuid from "uuid";

import ServerError from "./util/error";
import { expressLogger, logger } from "./util/logger";

import "./mongo/main";
import restRouter from "./routes/rest/rest";

logger.info("Starting express server...");

let app = express();

// Middleware setup
app.use(expressLogger);
app.use(favicon(path.join(__dirname, "public", "favicon.ico")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Check or set the user id cookie
app.use((req, res, next) => {
  let cookie = req.cookies.uuid;
  if (cookie === undefined) {   // Create a new cookie if uuid doesn"t exist
    let newId = uuid.v4();
    res.cookie("uuid", newId, {});
  }
  next();
});

// Use /public as static server
app.use(express.static(path.join(__dirname, "public")));

// Load rest endpoints
app.use("/api/v1", restRouter);

// catch 404 and redirect to root
app.use((req, res, next) => {
  res.redirect("/");
});

export default app;

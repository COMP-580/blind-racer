/**
 * Main entry point for mongo usage
 */

import * as mongoose from "mongoose";
import { logger } from "../util/logger";

logger.debug("Setting up mongoose...");

// Load schemas
import "./schemas";

// Set the promise library
import * as Q from "q";
(<any> mongoose).Promise = Q;

// Start up the mongoose connection
let mongoHost = "mongodb://localhost/";
let mongoDB = "blind-racer";
mongoose.connect(mongoHost + mongoDB, (err) => {
  console.log(mongoose.connection.readyState);
  if (err) {
    logger.error(err.stack);
  }
});

/**
 * Main entry point for mongo usage
 */

import * as mongoose from "mongoose";
import { logger } from "../util/logger";
import "./wipe";

logger.debug("Setting up mongoose...");

// Load schemas
import "./schemas";

// Set the promise library
import * as bluebird from "bluebird";
(<any> mongoose).Promise = bluebird;

// Start up the mongoose connection
let mongoHost = "mongodb://localhost/";
let mongoDB = "type-zone";
mongoose.connect(mongoHost + mongoDB, (err) => {
  if (err) {
    logger.error(err.stack);
  } else {
    logger.debug("Mongoose connected...");
  }
});

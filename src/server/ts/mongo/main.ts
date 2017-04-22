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
let mongoDB = "type-zone";
mongoose.connect(mongoHost + mongoDB);

mongoose.connection.on('connected', function () {
    (<any> mongoose).connection.db.collectionNames(function (err: any, names: any) {
        if (err) console.log(err);
        else console.log(names);
    });
})

console.log(mongoose.connection.readyState);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("connected");
});


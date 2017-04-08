/**
 * REST API endpoints
 */

import * as bcrypt from "bcryptjs";
import * as express from "express";
import * as path from "path";

import Util from "../../util/util";
import { RestError } from "./error";

// Import necessary schemas
import * as mongoose from "mongoose";
let Login = mongoose.model("Login");

// Main express REST router
let router = express.Router();

let salt = bcrypt.genSaltSync(5);

router.post("/login", (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let valid = true;

  if (!username || !password) {
    let e = new RestError("No username or password");
    return res.status(409).send(e);
  }
});

export default router;

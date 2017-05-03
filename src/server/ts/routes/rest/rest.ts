/**
 * REST API endpoints
 */

import * as bcrypt from "bcryptjs";
import * as express from "express";
import * as path from "path";

import Util from "../../util/util";
import { RestError } from "./error";

import { logger } from "../../util/logger";

// Import necessary schemas
import * as mongoose from "mongoose";
let DailyLeaderboard = mongoose.model("DailyLeaderboard");
let HourlyLeaderboard = mongoose.model("HourlyLeaderboard");

// Main express REST router
let router = express.Router();

let salt = bcrypt.genSaltSync(5);

// POST /leaderboard
router.post("/leaderboard", (req, res, next) => {
  let username = req.body.username;
  let score = req.body.score;
  let timestamp = Date.now();
  let valid = true;

  if (!username || !score) {
    let e = new RestError("No username or score");
    return res.status(409).send(e);
  } else {

    let dlb: any = new DailyLeaderboard();
    dlb.username = username;
    dlb.score = score;
    dlb.timestamp = timestamp;
    dlb.save((err: any) => {
      if (err) {
        let e = new RestError("Couldn't save");
        return res.status(500).send(e);
      } else {

        // Succesfully saved
        let hlb: any = new HourlyLeaderboard();
        hlb.username = username;
        hlb.score = score;
        hlb.timestamp = timestamp;
        hlb.save((err2: any) => {
          if (err2) {
            let e = new RestError("Couldn't save");
            return res.status(500).send(e);
          } else {
            return res.send({
              success: true,
            });
          }
        });
      }
    });
  }
});

// GET /leaderboard
router.get("/leaderboard", (req, res, next) => {
  let count = req.query.count || 10;

  let dquery = DailyLeaderboard.find()
    .limit(parseInt(count, 10))
    .sort({score: -1});

  let hquery = HourlyLeaderboard.find()
    .limit(parseInt(count, 10))
    .sort({score: -1});

  querydb(res, dquery, (dleaderboard: any) => {
    querydb(res, hquery, (hleaderboard: any) => {
      res.send({ daily: dleaderboard, hourly: hleaderboard });
    });
  });
});

// GET /leaderboard/deleteHourly
router.get("/leaderboard/deleteHourly", (req, res, next) => {
  logger.info("Wiping the hourly leaderboard");
  mongoose.connection.db.dropCollection("hourlyleaderboards", (err: any, results) => {
    if (err) {
      logger.error(err);
      res.status(500).send(err);
    } else {
      logger.debug("Finished wiping the hourly leaderboard");
      res.send({success: true});
    }
  });
});

// GET /leaderboard/deleteDaily
router.get("/leaderboard/deleteDaily", (req, res, next) => {
  logger.info("Wiping the daily leaderboard");
  mongoose.connection.db.dropCollection("dailyleaderboards", (err: any, results) => {
    if (err) {
      logger.error(err);
      res.status(500).send(err);
    } else {
      logger.debug("Finished wiping the daily leaderboard");
      res.send({success: true});
    }
  });
});

function querydb(res: any, query: any, success: any) {
  if (mongoose.connection.readyState === 0) {
    res.status(500).send({error: {message: "database down"}});
    mongoose.connect("mongodb://localhost/blind-racer", (err) => {
      if (err) {
        logger.error(err.stack);
      }
    });
  } else {
    query.exec((err: any, queryRes: any) => {
      if (err) {
        logger.error(err);
        res.status(500).send({error: {message: "internal server error"}});
      } else {
        success(queryRes);
      }
    });
  }
}

export default router;

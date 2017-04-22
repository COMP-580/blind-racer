import * as cron from "cron";
import * as mongoose from "mongoose";
import { logger } from "../util/logger";

// Daily
let dailyWipe = new cron.CronJob("0 0 0 * * *", () => {
  logger.info("Wiping the daily leaderboard");
  mongoose.connection.db.dropCollection("dailyleaderboards", (err: any, results) => {
    if (err) {
      logger.error(err);
    } else {
      logger.debug("Finished wiping the daily leaderboard");
    }
  });
}, null, true, "America/New_York");

// Hourly
let hourlyWipe = new cron.CronJob("0 0 * * * *", () => {
  logger.info("Wiping the hourly leaderboard");
  mongoose.connection.db.dropCollection("hourlyleaderboards", (err: any, results) => {
    if (err) {
      logger.error(err);
    } else {
      logger.debug("Finished wiping the hourly leaderboard");
    }
  });
}, null, true, "America/New_York");

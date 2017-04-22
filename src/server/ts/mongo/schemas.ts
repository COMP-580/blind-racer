/**
 * Definition of mongoose schemas
 */

/* tslint:disable:object-literal-sort-keys */

import * as mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

let DailyLeaderboard = new Schema({
  username: { type: String, minLength: 4, maxLength: 20 },
  score: { type: Number },
  timestamp: { type: Number },
  __v: { type: Number, select: false },
  id: { type: Schema.Types.ObjectId, select: false},
}, { bufferCommands: false });

let HourlyLeaderboard = new Schema({
  username: { type: String, minLength: 4, maxLength: 20 },
  score: { type: Number },
  timestamp: { type: Number },
  __v: { type: Number, select: false },
  id: { type: Schema.Types.ObjectId, select: false},
}, { bufferCommands: false });

// Expose schemas through mongoose
mongoose.model("DailyLeaderboard", DailyLeaderboard);
mongoose.model("HourlyLeaderboard", HourlyLeaderboard);

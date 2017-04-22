/**
 * Definition of mongoose schemas
 */

/* tslint:disable:object-literal-sort-keys */

import * as mongoose from "mongoose";
let Schema = mongoose.Schema;
let ObjectId = Schema.Types.ObjectId;

/**
 * Login represents a separate user/login that can be used
 */
// let Login = new Schema({
//   username: { type: String, minLength: 4, maxLength: 20 },
//   password: { type: String, minLength: 4, maxLength: 50 },
//   lastLogin: { type: Number, default: Date.now() },
//   playerId: { type: Schema.Types.ObjectId },
//   token: { type: String, default: "" },
// });

let Leaderboard = new Schema({
  username: { type: String, minLength: 4, maxLength: 20 },
  score: { type: Number },
  timestamp: { type: Number },
  __v: { type: Number, select: false },
  id: { type: Schema.Types.ObjectId, select: false},
}, { bufferCommands: false });

// Expose schemas through mongoose
mongoose.model("Leaderboard", Leaderboard);

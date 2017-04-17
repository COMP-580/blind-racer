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
let Leaderboard = mongoose.model("Leaderboard");

// Main express REST router
let router = express.Router();

let salt = bcrypt.genSaltSync(5);

router.post("/leaderboard", (req, res, next) => {
  let username = req.body.username;
  let score = req.body.score;
  let timestamp = Date.now();
  let valid = true;

  if (!username || !score) {
    let e = new RestError("No username or score");
    return res.status(409).send(e);
  }else{
    var lb:any = new Leaderboard();
    lb.username = username;
    lb.score = score;
    lb.timestampe = timestamp;
    lb.save(function (err:any){
      if (err){
        let e = new RestError("Couldn't save");
        return res.status(500).send(e);
      }else{
        return res.send({
          success:true
        });
      }
    })
  }
});

router.get("/leaderboard", (req,res,next)=> {
  var count = req.query.count||10;
  var query = Leaderboard.find()
    .limit(parseInt(count))
    .sort({"score": -1})
  querydb(res,query,function(leaderboard:any){
    res.send(leaderboard);
  })
});


var querydb=function(res:any,query:any,success:any){
  if (mongoose.connection.readyState==0){
    res.send({erro: {message: 'database down'}});
    mongoose.connect('mongodb://localhost/blind-racer',function(err){
      if(err){
        console.log(err.stack);
      }
    });
  }else{
    query.exec(function(err:any,queryRes:any){
      if (err){
        console.log(err);
        res.status(500).send({error: {message: 'internal server error'}});
      }else{
        success(queryRes);
      }
    })
  }
}

export default router;

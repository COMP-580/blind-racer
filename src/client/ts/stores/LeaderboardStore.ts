/**
 * LeaderboardStore
 *
 * In charge of displaying the leaderboard and submitting a score.
 */

import { AbstractStoreModel, alt } from "../alt";

import GameActions from "../actions/GameActions";
import LeaderboardActions from "../actions/LeaderboardActions";
import ModalActions from "../actions/ModalActions";

import { Modal } from "../enums/Modal";

import RestClient from "../util/RestClient";

interface ILeaderboardStoreState {
  hourlyScores: Array<{username: string, score: number}>;
  dailyScores: Array<{username: string, score: number}>;
}

class AltLeaderboardStore extends AbstractStoreModel<ILeaderboardStoreState> implements ILeaderboardStoreState {

  public dailyScores: Array<{username: string, score: number}>;
  public hourlyScores: Array<{username: string, score: number}>;

  constructor() {
    super();

    // Initialize these values
    this.dailyScores = [];
    this.hourlyScores = [];
    for (let i = 0; i < 10; i++) {
      let item = {username: "-", score: 0};
      this.dailyScores.push(item);
      this.hourlyScores.push(item);
    }

    this.bindAction(GameActions.endGame, this.onEndGame);
    this.bindAction(LeaderboardActions.refreshLeaderboard, this.onRefreshLeaderboard);
    this.bindAction(LeaderboardActions.updateLeaderboard, this.onUpdateLeaderboard);
    this.bindAction(LeaderboardActions.submitLeaderboard, this.onSubmitLeaderboard);
  }

  // When the game ends, open the submit score modal if the score is in the leaderboard.
  public onEndGame() {

    // Check if it's a top score...
    (<any> ModalActions).openModal.defer(Modal.SUBMIT_SCORE);
  }

  // Called when refreshing the leaderboard. This should put it in a loading state.
  public onRefreshLeaderboard() {

    // Fade in the overlay
    $("#lb-overlay").fadeIn();

    // Make the button spin and disable
    $("#refresh-lb-fa").addClass("fa-spin");
    $("#refresh-lb-btn").prop("disabled", true);

    // Start testing purposes
    function randomstring(L: any) {
        let s = "";
        let randomchar = () => {
            let n = Math.floor(Math.random() * 62);
            if (n < 10) { return n; } // 1-10
            if (n < 36) { return String.fromCharCode(n + 55); } // A-Z
            return String.fromCharCode(n + 61); // a-z
        };
        while (s.length < L) { s += randomchar(); };
        return s;
    }

    setTimeout(() => {
      let scores = { daily: Array(), hourly: Array() };
      for (let i = 0; i < 10; i++) {
        scores.hourly.push({
          score: Math.floor((Math.random() * 100)),
          username: randomstring(5),
        });
        scores.daily.push({
          score: Math.floor((Math.random() * 100)),
          username: randomstring(5),
        });
      }
      LeaderboardActions.updateLeaderboard(scores);
    }, 1000);
    // End testing purposes

  }

  // Once the data has loaded, this action will be loaded.
  public onUpdateLeaderboard(scores: {
                      daily: Array<{username: string, score: number}>,
                      hourly: Array<{username: string, score: number}>,
                    }) {

    $("#lb-overlay").stop();
    $("#lb-overlay").fadeOut();

    // Make the button stop spinning
    $("#refresh-lb-fa").removeClass("fa-spin");
    $("#refresh-lb-btn").prop("disabled", false);

    let comparator = (a: any, b: any) => {
      return b.score - a.score;
    };

    scores.daily.sort(comparator);
    scores.hourly.sort(comparator);

    this.dailyScores = scores.daily;
    this.hourlyScores = scores.hourly;

  }

  public onSubmitLeaderboard(score: {username: string, wpm: number}) {
    console.log("submitting the leaderboard", score);
  }
}

let LeaderboardStore = alt.createStore(AltLeaderboardStore, "LeaderboardStore");
export { ILeaderboardStoreState, LeaderboardStore }

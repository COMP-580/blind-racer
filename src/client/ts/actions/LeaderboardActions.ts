/**
 * LeaderboardActions
 *
 * In charge of updating the leaderboard and submitting results.
 */

import { AbstractActions, alt } from "../alt";

interface ILeaderboardActions {
  refreshLeaderboard(): void;
  updateLeaderboard(scores: {
                      daily: Array<{username: string, score: number}>,
                      hourly: Array<{username: string, score: number}>,
                    }): void;
  submitLeaderboard(score: {username: string, score: number}): void;
}

class LeaderboardActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "refreshLeaderboard",
      "updateLeaderboard",
      "submitLeaderboard",
    );
  }
}

export default alt.createActions<ILeaderboardActions>(LeaderboardActions);

/**
 * LeaderboardActions
 *
 * In charge of updating the leaderboard and submitting results.
 */

import { AbstractActions, alt } from "../alt";

interface ILeaderboardActions {
  refreshLeaderboard(): void;
  submitLeaderboard(username: string, score: number): void;
}

class LeaderboardActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "refreshLeaderboard",
      "submitLeaderboard",
    );
  }
}

export default alt.createActions<ILeaderboardActions>(LeaderboardActions);

/**
 * GameActions
 *
 * In charge of playing the game.
 */

import { AbstractActions, alt } from "../alt";

interface IGameActions {
  fetchGameText(): void;
  startGame(stats?: any): void;
  endGame(): void;
}

class GameActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "fetchGameText",
      "startGame",
      "endGame",
    );
  }
}

export default alt.createActions<IGameActions>(GameActions);

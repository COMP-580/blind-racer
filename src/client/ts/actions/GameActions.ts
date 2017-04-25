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
  sayCurrentWord(): void;
  spellCurrentWord(): void;
  spellInput(): void;
  disableButtons(): void;
  enableButtons(): void;
  checkCharsSoFar(word: string): void;
}

class GameActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "fetchGameText",
      "startGame",
      "endGame",
      "sayCurrentWord",
      "spellCurrentWord",
      "spellInput",
      "disableButtons",
      "enableButtons",
      "checkCharsSoFar",
    );
  }
}

export default alt.createActions<IGameActions>(GameActions);

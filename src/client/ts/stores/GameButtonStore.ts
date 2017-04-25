/**
 * GameButtonStore
 *
 * In charge of enabling/disabling certain buttons that are only available during the game.
 */

import { AbstractStoreModel, alt } from "../alt";

import GameActions from "../actions/GameActions";

interface IGameButtonStoreState {
  buttonIds: string[];
}

class AltGameButtonStore extends AbstractStoreModel<IGameButtonStoreState> implements IGameButtonStoreState {

  public buttonIds: string[];

  constructor() {
    super();

    this.buttonIds = [
      "spell-current-btn",
      "say-input-btn",
    ];

    this.bindAction(GameActions.startGame, this.onStartGame);
    this.bindAction(GameActions.endGame, this.onEndGame);
  }

  public onStartGame() {
    this.buttonIds.map((bid: string) => {
      $("#" + bid).prop("disabled", false);
    });
  }

  public onEndGame() {
    this.buttonIds.map((bid: string) => {
      $("#" + bid).prop("disabled", true);
    });
  }

}

let GameButtonStore = alt.createStore(AltGameButtonStore, "GameButtonStore");
export { IGameButtonStoreState, GameButtonStore }

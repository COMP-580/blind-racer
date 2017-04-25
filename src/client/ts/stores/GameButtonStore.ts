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
      "say-current-btn",
      "spell-current-btn",
      "spell-input-btn",
    ];

    this.bindAction(GameActions.startGame, this.onStartGame);
    this.bindAction(GameActions.endGame, this.onEndGame);
    this.bindAction(GameActions.disableButtons, this.onDisableButtons);
    this.bindAction(GameActions.enableButtons, this.onEnableButtons);
  }

  public onDisableButtons() {
    this.buttonIds.map((bid: string) => {
      $("#" + bid).prop("disabled", true);
    });
  }

  public onEnableButtons() {
    this.buttonIds.map((bid: string) => {
      $("#" + bid).prop("disabled", false);
    });
  }

  public onStartGame() {
    this.onEnableButtons();
  }

  public onEndGame() {
    this.onDisableButtons();
  }

}

let GameButtonStore = alt.createStore(AltGameButtonStore, "GameButtonStore");
export { IGameButtonStoreState, GameButtonStore }

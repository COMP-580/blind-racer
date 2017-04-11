/**
 * StatStore
 *
 * Tracks correctly/incorrectly typed words/characters. These stats will be displayed for the user.
 */

import { AbstractStoreModel, alt } from "../alt";

import GameActions from "../actions/GameActions";
import TypingActions from "../actions/TypingActions";

declare let responsiveVoice: any;

interface IStatStoreState {
  correctCharacters: number;
  incorrectCharacters: number;
  correctWords: number;
  incorrectWords: number;
}

class AltStatStore extends AbstractStoreModel<IStatStoreState> implements IStatStoreState {

  public correctCharacters: number;
  public incorrectCharacters: number;
  public correctWords: number;
  public incorrectWords: number;

  constructor() {
    super();
    this.correctCharacters = 0;
    this.incorrectCharacters = 0;
    this.correctWords = 0;
    this.incorrectWords = 0;

    this.bindAction(GameActions.startGame, this.onStartGame);
    this.bindAction(TypingActions.charSuccess, this.onCharSuccess);
    this.bindAction(TypingActions.charFail, this.onCharFail);
    this.bindAction(TypingActions.wordSuccess, this.onWordSuccess);
    this.bindAction(TypingActions.wordFail, this.onWordFail);
  }

  public onStartGame() {
    this.correctCharacters = 0;
    this.incorrectCharacters = 0;
    this.correctWords = 0;
    this.incorrectWords = 0;
  }

  public onCharSuccess(char: string) {
    this.correctCharacters++;
  }

  public onCharFail(char: string, expected: string) {
    this.incorrectCharacters++;
  }

  public onWordSuccess(word: string) {
    this.correctWords++;
  }

  public onWordFail(word: string, expected: string) {
    this.incorrectWords++;
  }

}

let StatStore = alt.createStore(AltStatStore, "StatStore");
export { IStatStoreState, StatStore }

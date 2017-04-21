/**
 * TypingModeStore
 *
 * Handles the different typing modes.
 */

/* tslint:disable:no-empty */

import { AbstractStoreModel, alt } from "../alt";

import GameActions from "../actions/GameActions";
import SettingsActions from "../actions/SettingsActions";
import SpeechActions from "../actions/SpeechActions";
import TypingActions from "../actions/TypingActions";

import { TypingMode } from "../enums/TypingMode";

interface ITypingModeStoreState {
  isPlaying: boolean;
  mode: TypingMode;
  lastPressedKey: string;
  keyPressHandler(e: React.KeyboardEvent<HTMLInputElement>): void;
}

class AltTypingModeStore extends AbstractStoreModel<ITypingModeStoreState> implements ITypingModeStoreState {

  public isPlaying: boolean;
  public mode: TypingMode;
  public lastPressedKey: string;
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  constructor() {
    super();
    this.isPlaying = false;
    this.mode = TypingMode.STANDARD;
    this.lastPressedKey = "";
    this.keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};
    this.bindAction(GameActions.startGame, this.onStartGame);
    this.bindAction(GameActions.endGame, this.onEndGame);
    this.bindAction(SettingsActions.changeTypingMode, this.onChangeTypingMode);

    this.standardMode = this.standardMode.bind(this);
    this.blindMode = this.blindMode.bind(this);
  }

  public onStartGame() {
    this.isPlaying = true;
  }

  public onEndGame() {
    this.isPlaying = false;
  }

  public onChangeTypingMode(mode: TypingMode) {
    this.mode = mode;
    if (mode === TypingMode.STANDARD) {
      this.keyPressHandler = this.standardMode;
    } else if (mode === TypingMode.REPEAT) {
      this.keyPressHandler = this.blindMode;
    }
  }

  public standardMode(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault();

    // Don't type if the game hasn't started
    if (!this.isPlaying) {
      return;
    }

    let c = String.fromCharCode(e.which);
    if (c === " ") {
      let word = (<any> global).$("#text-input").val();
      TypingActions.typeWord(word);
    } else {
      TypingActions.typeChar(c);
    }
  }

  public blindMode(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault();

    // Don't type if the game hasn't started
    if (!this.isPlaying) {
      return;
    }

    let c = String.fromCharCode(e.which);
    if (c === this.lastPressedKey) {
      if (c === " ") {
      let word = (<any> global).$("#text-input").val();
      TypingActions.typeWord(word);
      } else {
        TypingActions.typeChar(c);
      }
    } else {
      this.lastPressedKey = c;
      SpeechActions.sayText(c);
    }
  }

}

let TypingModeStore = alt.createStore(AltTypingModeStore, "TypingModeStore");
export { ITypingModeStoreState, TypingModeStore }

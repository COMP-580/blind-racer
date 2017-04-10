/**
 * TypingModeStore
 *
 * Handles the different typing modes.
 */

/* tslint:disable:no-empty */

import { AbstractStoreModel, alt } from "../alt";

import SettingsActions from "../actions/SettingsActions";
import SpeechActions from "../actions/SpeechActions";
import TypingActions from "../actions/TypingActions";

import TypingMode from "../enums/TypingMode";

interface ITypingModeStoreState {
  mode: TypingMode;
  lastPressedKey: string;
  keyPressHandler(e: React.KeyboardEvent<HTMLInputElement>): void;
}

class AltTypingModeStore extends AbstractStoreModel<ITypingModeStoreState> implements ITypingModeStoreState {

  public mode: TypingMode;
  public lastPressedKey: string;
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  constructor() {
    super();
    this.mode = TypingMode.STANDARD;
    this.lastPressedKey = "";
    this.keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};
    this.bindAction(SettingsActions.changeTypingMode, this.onChangeTypingMode);
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

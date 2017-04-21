/**
 * UserInputStore
 *
 * Defines the state of the user input text box. It also defines how the value of the input text.
 */

import { AbstractStoreModel, alt } from "../alt";

import GameActions from "../actions/GameActions";
import TypingActions from "../actions/TypingActions";

interface IUserInputStoreState {
  currentWord: string;
}

class AltUserInputStore extends AbstractStoreModel<IUserInputStoreState> implements IUserInputStoreState {

  public currentWord: string;
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  constructor() {
    super();
    this.currentWord = "";
    this.bindAction(GameActions.startGame, this.onStartGame);
    this.bindAction(GameActions.endGame, this.onEndGame);
    this.bindAction(TypingActions.typeChar, this.onTypeChar);
    this.bindAction(TypingActions.typeWord, this.onTypeWord);
  }

  public onStartGame() {
    $("#text-input").prop("disabled", false);
    $("#text-input").focus();
  }

  public onEndGame() {
    $("#text-input").prop("disabled", true);
  }

  public onTypeChar(c: string) {
    let inputText = (<any> global).$("#text-input");
    inputText.val(inputText.val() + c);
  }

  public onTypeWord(word: string) {
    let inputText = (<any> global).$("#text-input");
    inputText.val("");
  }

}
let UserInputStore = alt.createStore(AltUserInputStore, "UserInputStore");
export { IUserInputStoreState, UserInputStore }

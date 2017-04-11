/**
 * UserInputStore
 *
 * Defines the state of the user input text box
 */

import { AbstractStoreModel, alt } from "../alt";

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
    this.bindAction(TypingActions.typeChar, this.onTypeChar);
    this.bindAction(TypingActions.typeWord, this.onTypeWord);
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

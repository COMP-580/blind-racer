import { AbstractStoreModel, alt } from "../alt";
import TypingActions from "../actions/TypingActions"

interface IInputTextStoreState {
  currentWord: string;
}

class AltInputTextStore extends AbstractStoreModel<IInputTextStoreState> implements IInputTextStoreState {
  public currentWord: string;
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  constructor() {
    super();
    this.currentWord = "";
    this.bindAction(TypingActions.typeChar,this.onTypeChar);
    this.bindAction(TypingActions.typeWord,this.onTypeWord);
  }

  public onTypeChar(c: string) {
    let inputText = (<any>global).$("#text-input");
    inputText.val(inputText.val() + c);
  }

  public onTypeWord(word: string){
    let inputText = (<any>global).$("#text-input");
    inputText.val("");
  }




}
let InputTextStore = alt.createStore(AltInputTextStore);
export { IInputTextStoreState, InputTextStore }

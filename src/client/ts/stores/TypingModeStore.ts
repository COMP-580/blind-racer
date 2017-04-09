import { AbstractStoreModel, alt } from "../alt";
import TypingActions from "../actions/TypingActions"
import SpeechActions from "../actions/SpeechActions"

interface ITypingModeStoreState {
  mode: number;
  lastPressedKey: string;
  keyPressHandler(e: React.KeyboardEvent<HTMLInputElement>): void;
}

class AltTypingModeStore extends AbstractStoreModel<ITypingModeStoreState> implements ITypingModeStoreState {
  public mode: number;
  public lastPressedKey: string;
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  constructor() {
    super();
    this.mode = -1;
    this.lastPressedKey = "";
    this.keyPressHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {};
    this.bindAction(TypingActions.changeMode,this.changeMode);
  }

  public changeMode(mode: number) {
    this.mode = mode;
    if(mode === 0){
      this.keyPressHandler = this.standardMode;
    }else{
      this.keyPressHandler = this.blindMode;
    }
  }

  public standardMode(e: React.KeyboardEvent<HTMLInputElement>) {
    e.preventDefault();
    let c = String.fromCharCode(e.which);
    if (c === " ") {
      let word = (<any>global).$("#text-input").val();
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
      let word = (<any>global).$("#text-input").val();
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
let TypingModeStore = alt.createStore(AltTypingModeStore);
export { ITypingModeStoreState, TypingModeStore }

import { AbstractStoreModel, alt } from "../alt";
import TypingActions from "../actions/TypingActions"

interface ITypingModeStoreState {
  mode: number;
  keyPressHandler(e: React.KeyboardEvent<HTMLInputElement>): void;
}

class AltTypingModeStore extends AbstractStoreModel<ITypingModeStoreState> implements ITypingModeStoreState {
  public mode: number;
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  constructor() {
    super();
    this.mode = -1;
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

  }



}
let TypingModeStore = alt.createStore(AltTypingModeStore);
export { ITypingModeStoreState, TypingModeStore }

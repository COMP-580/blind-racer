import { AbstractStoreModel, alt } from "../alt";
import SpeechActions from "../actions/SpeechActions"

let speak: any = require("node-speak");

interface ISpeechStoreState {
  currentWord: string;
}

class AltSpeechStore extends AbstractStoreModel<ISpeechStoreState> implements ISpeechStoreState {
  public currentWord: string;
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  constructor() {
    super();
    this.currentWord = "";
    this.bindAction(SpeechActions.sayText,this.onSayText);
  }

  public onSayText(text: string) {
    speak(text, {speed: 175});
  }

}
let SpeechStore = alt.createStore(AltSpeechStore);
export { ISpeechStoreState, SpeechStore }

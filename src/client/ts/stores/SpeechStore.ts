import { AbstractStoreModel, alt } from "../alt";

import SpeechActions from "../actions/SpeechActions";

declare let responsiveVoice: any;

interface ISpeechStoreState {
  currentWord: string;
}

class AltSpeechStore extends AbstractStoreModel<ISpeechStoreState> implements ISpeechStoreState {

  public currentWord: string;
  public keyPressHandler: (e: React.KeyboardEvent<HTMLInputElement>) => void;

  constructor() {
    super();
    this.currentWord = "";
    this.bindAction(SpeechActions.sayText, this.onSayText);
  }

  public onSayText(text: string) {
    responsiveVoice.speak(text);
  }

}
let SpeechStore = alt.createStore(AltSpeechStore);
export { ISpeechStoreState, SpeechStore }

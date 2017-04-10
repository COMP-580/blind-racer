import { AbstractStoreModel, alt } from "../alt";

import SoundActions from "../actions/SoundActions";
import SpeechActions from "../actions/SpeechActions";
import TypingActions from "../actions/TypingActions";

interface IBoxStoreState {
  words: string;
  finishedWords: string[];
  currentWord: string;
  unfinishedWords: string[];
}

class AltBoxStore extends AbstractStoreModel<IBoxStoreState> implements IBoxStoreState {
  public words: string;
  public finishedWords: string[];
  public currentWord: string;
  public unfinishedWords: string[];

  constructor() {
    super();
    this.words = "My giant fat cat Died Last weak. Fuck me";
    this.finishedWords = [];
    this.unfinishedWords = this.words.split(" ");
    this.currentWord = this.unfinishedWords[0];
    this.unfinishedWords.shift();

    this.bindAction(TypingActions.typeWord, this.onTypeWord);
  }

  public onTypeWord(word: string) {
    if (word === this.currentWord) {
      this.finishedWords.push(word);
      this.currentWord = this.unfinishedWords[0];
      this.unfinishedWords.shift();
      (<any> SpeechActions).sayText.defer(this.currentWord);
      (<any> SoundActions).playSound.defer("ding");
      (<any> TypingActions).wordSuccess.defer(word);
    } else {
      (<any> SoundActions).playSound.defer("inception-horn");
    }
    if (!this.currentWord) {
      (<any> SoundActions).playSound.defer("party-horn");
      (<any> TypingActions).stopTyping.defer();
    }
  }

}

let BoxStore = alt.createStore(AltBoxStore);

export { IBoxStoreState, BoxStore }

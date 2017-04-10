import { AbstractStoreModel, alt } from "../alt";

import GameActions from "../actions/GameActions";
import SoundActions from "../actions/SoundActions";
import SpeechActions from "../actions/SpeechActions";
import TimingActions from "../actions/timingActions";
import TypingActions from "../actions/TypingActions";

interface IGameTextStoreState {
  phrase: string;
  finishedWords: string[];
  currentWord: string;
  unfinishedWords: string[];
}

class AltGameTextStore extends AbstractStoreModel<IGameTextStoreState> implements IGameTextStoreState {
  public phrase: string;
  public finishedWords: string[];
  public currentWord: string;
  public unfinishedWords: string[];

  constructor() {
    super();
    this.phrase = "My giant fat cat Died Last weak. Fuck me";
    this.finishedWords = [];
    this.unfinishedWords = this.phrase.split(" ");
    this.currentWord = this.unfinishedWords[0];
    this.unfinishedWords.shift();

    this.bindAction(GameActions.fetchGameText, this.onFetchGameText);
    this.bindAction(TypingActions.typeWord, this.onTypeWord);
  }

  public onFetchGameText() {
    let phrase = "My giant fat cat Died Last weak. Fuck me";
    this.parsePhrase(phrase);
  }

  public parsePhrase(phrase: string) {
    this.phrase = phrase;
    this.finishedWords = [];
    this.unfinishedWords = this.phrase.split(" ");
    this.currentWord = this.unfinishedWords[0];
    this.unfinishedWords.shift();
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
      (<any> TimingActions).stopTyping.defer();
    }
  }

}

let GameTextStore = alt.createStore(AltGameTextStore, "GameTextStore");
export { IGameTextStoreState, GameTextStore }

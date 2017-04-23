/**
 * GameTextStore
 *
 * Handles the state of the game text. It will fetch a phrase for the user to type, and also store the different types
 * of text data while the user is typing.
 */

import { AbstractStoreModel, alt } from "../alt";

import GameActions from "../actions/GameActions";
import SettingsActions from "../actions/SettingsActions";
import SoundActions from "../actions/SoundActions";
import SpeechActions from "../actions/SpeechActions";
import TimingActions from "../actions/TimingActions";
import TypingActions from "../actions/TypingActions";

interface IGameTextStoreState {
  phrase: string;
  finishedWords: string[];
  currentWord: string;
  unfinishedWords: string[];
  checkPunctuation: boolean;
}

class AltGameTextStore extends AbstractStoreModel<IGameTextStoreState> implements IGameTextStoreState {
  public phrase: string;
  public finishedWords: string[];
  public currentWord: string;
  public unfinishedWords: string[];
  public checkPunctuation: boolean;

  constructor() {
    super();
    this.phrase = "My giant fat cat Died Last weak. Fuck me";
    this.finishedWords = [];
    this.unfinishedWords = this.phrase.split(" ");
    this.currentWord = this.unfinishedWords[0];
    this.unfinishedWords.shift();
    this.checkPunctuation = false;

    this.bindAction(GameActions.startGame, this.onStartGame);
    this.bindAction(GameActions.fetchGameText, this.onFetchGameText);
    this.bindAction(TypingActions.typeWord, this.onTypeWord);
    this.bindAction(SettingsActions.changeCheckPunctuation, this.onChangeCheckPunctuation);
  }

  public onStartGame() {
    this.onFetchGameText();
    (SpeechActions as any).sayText.defer(this.currentWord);
  }

  public onFetchGameText() {
    let phrase = "My giant, fat cat Died Last weak. Fuck; me";
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

    if (this.checkWord(word, this.currentWord, this.checkPunctuation)) {
      // this.finishedWords.push(word);
      // this.currentWord = this.unfinishedWords[0];
      // this.unfinishedWords.shift();
      // if (this.currentWord) {
      //   (<any> SpeechActions).sayText.defer(this.currentWord);
      // }
      // (<any> SoundActions).playSound.defer("ding");
      // (<any> TypingActions).wordSuccess.defer(word);

      this.finishedWords.push(this.currentWord);
      this.currentWord = this.unfinishedWords[0];
      this.unfinishedWords.shift();
      if (this.currentWord) {
        (<any> SpeechActions).sayText.defer(this.currentWord);
      }
      (<any> SoundActions).playSound.defer("ding");
      (<any> TypingActions).wordSuccess.defer(word);
    } else {
      (<any> SoundActions).playSound.defer("inception-horn");
    }

    // Check if finished
    if (!this.currentWord) {
      this.currentWord = "";
      (<any> SoundActions).playSound.defer("party-horn");
      (<any> TimingActions).stopTyping.defer();
      (<any> GameActions).endGame.defer();
    }
  }

  public checkWord(word: string, expected: string, checkPunctuation: boolean) {
    if (checkPunctuation) {
      return word === expected;
    } else {
      word = word.toLowerCase();
      expected = expected.toLowerCase();

      // Strip punctuation
      expected = expected.replace(/[;,\.]+/i, "");
      return word === expected;
    }
  }

  public onChangeCheckPunctuation(check: boolean) {
    this.checkPunctuation = check;
  }

}

let GameTextStore = alt.createStore(AltGameTextStore, "GameTextStore");
export { IGameTextStoreState, GameTextStore }

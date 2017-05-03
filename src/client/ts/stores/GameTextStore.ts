/**
 * GameTextStore
 *
 * Handles the state of the game text. It will fetch a phrase for the user to type, and also store the different types
 * of text data while the user is typing.
 */

import { AbstractStoreModel, alt } from "../alt";

import { GameMode } from "../enums/GameMode";

import GameActions from "../actions/GameActions";
import SettingsActions from "../actions/SettingsActions";
import SoundActions from "../actions/SoundActions";
import SpeechActions from "../actions/SpeechActions";
import TimingActions from "../actions/TimingActions";
import TypingActions from "../actions/TypingActions";

import text from "./data/text";

interface IGameTextStoreState {
  phrase: string;
  finishedWords: string[];
  currentWord: string;
  unfinishedWords: string[];
  checkPunctuation: boolean;
  text: string[];
}

class AltGameTextStore extends AbstractStoreModel<IGameTextStoreState> implements IGameTextStoreState {
  public phrase: string;
  public finishedWords: string[];
  public currentWord: string;
  public unfinishedWords: string[];
  public checkPunctuation: boolean;
  public sentences: string[];
  public alphabet: string[];
  public text: string[];

  constructor() {
    super();
    this.phrase = "";
    this.finishedWords = [];
    this.sentences = text;
    this.alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    this.text = text;
    this.unfinishedWords = this.phrase.split(" ");
    this.currentWord = this.unfinishedWords[0];
    this.unfinishedWords.shift();
    this.checkPunctuation = false;

    this.bindAction(GameActions.startGame, this.onStartGame);
    this.bindAction(GameActions.fetchGameText, this.onFetchGameText);
    this.bindAction(TypingActions.typeWord, this.onTypeWord);
    this.bindAction(SettingsActions.changeCheckPunctuation, this.onChangeCheckPunctuation);
    this.bindAction(SettingsActions.changeGameMode, this.onChangeGameMode);
    this.bindAction(GameActions.spellCurrentWord, this.onSpellCurrentWord);
    this.bindAction(GameActions.sayCurrentWord, this.onSayCurrentWord);
    this.bindAction(GameActions.checkCharsSoFar, this.onCheckCharsSoFar);
  }

  public onStartGame() {
    this.onFetchGameText();
    (SpeechActions as any).sayText.defer(this.currentWord);
  }

  public onFetchGameText() {
    let phrase;
    if (this.text[0].length === 1) {   // Alphabet
      let letters = [];
      for (let i = 0; i < 10; i++) {
        let j = Math.floor(Math.random() * this.text.length);
        let letter = this.text[j];
        letters.push(letter);
      }
      phrase = letters.join(" ");

    } else {    // Sentences
      let i = Math.floor(Math.random() * this.text.length);
      phrase = this.text[i];
    }

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

      this.finishedWords.push(this.currentWord);
      this.currentWord = this.unfinishedWords[0];
      this.unfinishedWords.shift();
      if (this.currentWord) {
        (<any> SpeechActions).sayText.defer(this.currentWord);
      }
      (<any> SoundActions).playSound.defer("ding");
      (<any> TypingActions).wordSuccess.defer(word);
    } else {
      (<any> SpeechActions).sayText.defer(this.currentWord);
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

  public processExpected(expected: string, checkPunctuation: boolean) {
    if (checkPunctuation) {
      return expected;
    } else {
      expected = expected.toLowerCase();
      expected = expected.replace(/[;,\.\?]+/i, "");
      return expected;
    }
  }

  public checkWord(word: string, expected: string, checkPunctuation: boolean) {
    if (checkPunctuation) {
      return word === expected;
    } else {
      word = word.toLowerCase();
      expected = this.processExpected(expected, checkPunctuation);

      return word === expected;
    }
  }

  public onChangeCheckPunctuation(check: boolean) {
    this.checkPunctuation = check;
  }

  public onChangeGameMode(gameMode: GameMode) {
    if (gameMode === GameMode.BEGINNER) {
      this.text = this.alphabet;
    } else if (gameMode === GameMode.INTERMEDIATE) {
      this.text = this.sentences;
    } else {
      this.text = this.sentences;
    }
  }

  public onSpellCurrentWord() {
    if (this.currentWord) {
      let word = this.processExpected(this.currentWord, this.checkPunctuation);
      (<any> SpeechActions).spellWord.defer(word);
    }
  }

  public onSayCurrentWord() {
    if (this.currentWord) {
      let word = this.processExpected(this.currentWord, this.checkPunctuation);
      (<any> SpeechActions).sayText.defer(word);
    }
  }

  public onCheckCharsSoFar(word: string) {
    if (!word || !this.currentWord) {
      return false;
    }
    if (!this.checkPunctuation) {
      word = word.toLowerCase();
    }
    let expected = this.processExpected(this.currentWord, this.checkPunctuation);
    if (word.length > expected.length) {
      (<any> SoundActions).playSound.defer("inception-horn");
      return false;
    }

    // Loop through both words making sure it's the same word
    let i = 0;

    while (i < word.length && i < expected.length) {
      if (word.charAt(i) !== expected.charAt(i)) {
        (<any> SoundActions).playSound.defer("inception-horn");
        return false;
      }
      i++;
    }

    return true;
  }

}

let GameTextStore = alt.createStore(AltGameTextStore, "GameTextStore");
export { IGameTextStoreState, GameTextStore }

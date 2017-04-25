/**
 * SpeechStore
 *
 * In charge of synthesizing speech. Uses ResponsiveVoiceJs as its underlying implementation.
 */

import { AbstractStoreModel, alt } from "../alt";

import SettingsActions from "../actions/SettingsActions";
import SpeechActions from "../actions/SpeechActions";

declare let responsiveVoice: any;

interface ISpeechStoreState {
  currentWord: string;

  masterVolume: number;
  speechVolume: number;
  volume: number;
}

class AltSpeechStore extends AbstractStoreModel<ISpeechStoreState> implements ISpeechStoreState {

  public currentWord: string;

  public masterVolume: number;
  public speechVolume: number;
  public volume: number;

  constructor() {
    super();
    this.currentWord = "";
    this.masterVolume = 1;
    this.speechVolume = 0.25;
    this.volume = this.masterVolume * this.speechVolume;

    responsiveVoice.setDefaultVoice("US English Female");

    this.bindAction(SpeechActions.sayText, this.onSayText);
    this.bindAction(SpeechActions.spellWord, this.onSpellWord);
    this.bindAction(SettingsActions.changeMasterVolume, this.onChangeMasterVolume);
    this.bindAction(SettingsActions.changeSpeechVolume, this.onChangeSpeechVolume);
  }

  public onSayText(text: string) {
    responsiveVoice.speak(text, null, {volume: this.volume});
  }

  public onSpellWord(word: string) {
    // Sanitize word
    word = word.toLowerCase();
    word = word.replace(/[;,\.]+/i, "");

    // Separate by characters
    let characters = word.split("");
    let phrase = characters.join(" ");
    responsiveVoice.speak(phrase, null, {volume: this.volume});
  }

  public onChangeMasterVolume(volume: number) {
    this.masterVolume = volume;
    this.volume = this.masterVolume * this.speechVolume;
  }

  public onChangeSpeechVolume(volume: number) {
    this.speechVolume = volume;
    this.volume = this.masterVolume * this.speechVolume;
  }

}

let SpeechStore = alt.createStore(AltSpeechStore, "SpeechStore");
export { ISpeechStoreState, SpeechStore }

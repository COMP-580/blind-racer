/**
 * SettingsStore
 *
 * Keeps track of user settings. This includes handling settings like the typing mode, color theme, and global volume.
 * The main purpose of this store is to keep track of the settings state to present as a modal.
 */

import * as Cookies from "js-cookie";

import { AbstractStoreModel, alt } from "../alt";

import SettingsActions from "../actions/SettingsActions";

import { ColorTheme } from "../enums/ColorTheme";
import { TypingMode } from "../enums/TypingMode";

interface ISettingsStoreState {
  colorTheme: ColorTheme;
  typingMode: TypingMode;
  masterVolume: number;
  soundVolume: number;
  speechVolume: number;
  checkPunctuation: boolean;
}

class AltSettingsStore extends AbstractStoreModel<ISettingsStoreState> implements ISettingsStoreState {

  public colorTheme: ColorTheme;
  public typingMode: TypingMode;
  public masterVolume: number;
  public soundVolume: number;
  public speechVolume: number;
  public checkPunctuation: boolean;

  constructor() {
    super();
    this.colorTheme = ColorTheme.STANDARD;
    this.typingMode = TypingMode.STANDARD;
    this.masterVolume = 0.5;
    this.soundVolume = 0.5;
    this.speechVolume = 0.5;
    this.checkPunctuation = false;

    this.bindAction(SettingsActions.changeColorTheme, this.onChangeColorTheme);
    this.bindAction(SettingsActions.changeTypingMode, this.onChangeTypingMode);
    this.bindAction(SettingsActions.changeMasterVolume, this.onChangeMasterVolume);
    this.bindAction(SettingsActions.changeSoundVolume, this.onChangeSoundVolume);
    this.bindAction(SettingsActions.changeSpeechVolume, this.onChangeSpeechVolume);
    this.bindAction(SettingsActions.changeCheckPunctuation, this.onChangeCheckPunctuation);

  }

  public onChangeColorTheme(colorTheme: ColorTheme) {
    this.colorTheme = colorTheme;
    Cookies.set("colorTheme", colorTheme);
  }

  public onChangeTypingMode(typingMode: TypingMode) {
    this.typingMode = typingMode;
    Cookies.set("typingMode", typingMode);
  }

  public onChangeMasterVolume(volume: number) {
    this.masterVolume = volume;
    Cookies.set("masterVolume", volume);
  }

  public onChangeSoundVolume(volume: number) {
    this.soundVolume = volume;
    Cookies.set("soundVolume", volume);
  }

  public onChangeSpeechVolume(volume: number) {
    this.speechVolume = volume;
    Cookies.set("speechVolume", volume);
  }

  public onChangeCheckPunctuation(check: boolean) {
    Cookies.set("checkPunctuation", check);
  }

}
let SettingsStore = alt.createStore(AltSettingsStore, "SettingsStore");
export { ISettingsStoreState, SettingsStore }

/**
 * SettingsStore
 *
 * Keeps track of user settings. This includes handling settings like the typing mode, color theme, and global volume.
 * The main purpose of this store is to keep track of the settings state to present as a modal.
 */

import { AbstractStoreModel, alt } from "../alt";

import SettingsActions from "../actions/SettingsActions";

import ColorTheme from "../enums/ColorTheme";
import TypingMode from "../enums/TypingMode";

interface ISettingsStoreState {
  colorTheme: ColorTheme;
  typingMode: TypingMode;
  volume: number;
}

class AltSettingsStore extends AbstractStoreModel<ISettingsStoreState> implements ISettingsStoreState {

  public colorTheme: ColorTheme;
  public typingMode: TypingMode;
  public volume: number;

  constructor() {
    super();
    this.colorTheme = ColorTheme.STANDARD;
    this.typingMode = TypingMode.STANDARD;
    this.volume = 1.0;

    this.bindAction(SettingsActions.changeColorTheme, this.onChangeColorTheme);
    this.bindAction(SettingsActions.changeTypingMode, this.onChangeTypingMode);
    this.bindAction(SettingsActions.changeVolume, this.onChangeVolume);
  }

  public onChangeColorTheme(colorTheme: ColorTheme) {
    this.colorTheme = colorTheme;
  }

  public onChangeTypingMode(typingMode: TypingMode) {
    this.typingMode = typingMode;
  }

  public onChangeVolume(volume: number) {
    this.volume = volume;
  }

}
let SettingsStore = alt.createStore(AltSettingsStore, "SettingsStore");
export { ISettingsStoreState, SettingsStore }

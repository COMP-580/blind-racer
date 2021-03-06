/**
 * SettingsActions
 *
 * Actions related to updating client settings. Settings include the input mode, color theme, and volume.
 */

import { AbstractActions, alt } from "../alt";

import { ColorTheme } from "../enums/ColorTheme";
import { GameMode } from "../enums/GameMode";
import { TypingMode } from "../enums/TypingMode";

interface ISettingsActions {
  changeColorTheme(theme: ColorTheme): void;
  changeTypingMode(mode: TypingMode): void;
  changeGameMode(mode: GameMode): void;
  changeMasterVolume(volume: number): void;
  changeSoundVolume(volume: number): void;
  changeSpeechVolume(volume: number): void;
  changeCheckPunctuation(check: boolean): void;
}

class SettingsActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "changeColorTheme",
      "changeTypingMode",
      "changeGameMode",
      "changeMasterVolume",
      "changeSoundVolume",
      "changeSpeechVolume",
      "changeCheckPunctuation",
    );
  }
}

export default alt.createActions<ISettingsActions>(SettingsActions);

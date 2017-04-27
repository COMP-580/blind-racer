/**
 * Settings
 *
 * Settings content.
 */

import * as React from "react";

import ColorTheme from "./Form/ColorTheme";
import GameMode from "./Form/GameMode";
import Modes from "./Form/Modes";
import Punctuation from "./Form/Punctuation";
import Volume from "./Form/Volume/Volume";

class Settings extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div id="game-settings">
        <legend className="legend">Settings</legend>

        <h4>Game Modes</h4>
        <GameMode />

        <h4>Typing Modes</h4>
        <Modes />

        <h4>Volume</h4>
        <Volume />

        <h4>Advanced</h4>
        <Punctuation />
      </div>
    );
  }
}

export default Settings;

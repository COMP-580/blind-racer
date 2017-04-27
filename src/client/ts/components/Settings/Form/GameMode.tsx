/**
 * Game
 *
 * Radio button selector for different game modes.
 */

import * as Cookies from "js-cookie";
import * as React from "react";
import SettingsActions from "../../../actions/SettingsActions";

import { GameMode, toGameMode } from "../../../enums/GameMode";

class Modes extends React.Component<any, any> {

  constructor() {
    super();
  }

  public componentDidMount() {
    let radio = $("input[type=radio][name=GameModeType]");
    radio.change(() => {
      let value = parseInt($("input[type=radio][name=GameModeType]:checked").val(), 10);
      if (value === 1) {
        SettingsActions.changeGameMode(GameMode.BEGINNER);
      } else if (value === 2) {
        SettingsActions.changeGameMode(GameMode.INTERMEDIATE);
      }
    });

    // Check the initial setting
    let typingMode = toGameMode(parseInt(Cookies.get("gameMode"), 10)) || GameMode.INTERMEDIATE;
    let element;
    if (typingMode === GameMode.BEGINNER) {
      element = $("#game-mode-beginner");
    } else if (typingMode === GameMode.INTERMEDIATE) {
      element = $("#game-mode-intermediate");
    }
    element.prop("checked", true);
  }

  public render() {
    return (
      <div>
        <div className="radio">
          <label><input id="game-mode-beginner" type="radio" name="GameModeType" value="1"/>Beginner</label>
        </div>
        <div className="radio">
          <label><input id="game-mode-intermediate" type="radio" name="GameModeType" value="2"/>Intermediate</label>
        </div>
      </div>
    );
  }
}

export default Modes;

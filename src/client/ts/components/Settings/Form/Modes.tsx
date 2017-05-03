/**
 * Modes
 *
 * Radio button selector for different typing modes.
 */

import * as Cookies from "js-cookie";
import * as React from "react";
import SettingsActions from "../../../actions/SettingsActions";

import { toTypingMode, TypingMode } from "../../../enums/TypingMode";

class Modes extends React.Component<any, any> {

  constructor() {
    super();
  }

  public componentDidMount() {
    let radio = $("input[type=radio][name=ModeType]");
    radio.change(() => {
      let value = parseInt($("input[type=radio][name=ModeType]:checked").val(), 10);
      if (value === 1) {
        SettingsActions.changeTypingMode(TypingMode.STANDARD);
      } else if (value === 2) {
        SettingsActions.changeTypingMode(TypingMode.REPEAT);
      }
    });

    // Check the initial setting
    let typingMode = toTypingMode(parseInt(Cookies.get("typingMode"), 10)) || TypingMode.STANDARD;
    let element;
    if (typingMode === TypingMode.STANDARD) {
      element = $("#typing-mode-standard");
    } else if (typingMode === TypingMode.REPEAT) {
      element = $("#typing-mode-repeat");
    } else {
      element = $("#typing-mode-standard");
    }
    element.prop("checked", true);
  }

  public render() {
    return (
      <div>
        <div className="radio">
          <label><input id="typing-mode-standard" type="radio" name="ModeType" value="1"/>Standard</label>
        </div>
        <div className="radio">
          <label><input id="typing-mode-repeat" type="radio" name="ModeType" value="2"/>Playback</label>
        </div>
      </div>
    );
  }
}

export default Modes;

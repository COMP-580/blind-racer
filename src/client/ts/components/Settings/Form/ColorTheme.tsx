/**
 * ColorTheme
 *
 * Radio button selector for different color themes.
 */

import * as React from "react";
import SettingsActions from "../../../actions/SettingsActions";

import { ColorTheme } from "../../../enums/ColorTheme";

class ColorThemeClass extends React.Component<any, any> {

  constructor() {
    super();
  }

  public componentDidMount() {
    let radio = $("input[type=radio][name=ColorTheme]");
    radio.change(() => {
      let value = parseInt($("input[type=radio][name=ColorTheme]:checked").val(), 10);
      if (value === 1) {
        SettingsActions.changeColorTheme(ColorTheme.STANDARD);
      }
    });
  }

  public render() {
    return (
      <div>
        <div className ="radio">
          <label><input type="radio" name="ColorTheme"/>Color Theme 1</label>
        </div>
      </div>
    );
  }
}

export default ColorThemeClass;

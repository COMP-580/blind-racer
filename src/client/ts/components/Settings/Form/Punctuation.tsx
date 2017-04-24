/**
 * Punctuation
 *
 * Checkbox setting for whether punctuation is checked or not.
 */

import * as Cookies from "js-cookie";
import * as React from "react";
import SettingsActions from "../../../actions/SettingsActions";

class CheckPunctuation extends React.Component<any, any> {

  constructor() {
    super();
  }

  public componentDidMount() {

    let punctuation = $("#check-punctuation");
    punctuation.change(() => {
      let checkPunctuation = punctuation.is(":checked");
      SettingsActions.changeCheckPunctuation(checkPunctuation);
    });

    // Select the box if true
    let checkPunctuation = Cookies.get("checkPunctuation") === "true" || false;
    if (checkPunctuation) {
      punctuation.prop("checked", true);
    }
  }

  public render() {
    return (
      <div className="checkbox">
        <label><input id="check-punctuation" type="checkbox" />Check Punctuation</label>
      </div>
    );
  }
}

export default CheckPunctuation;

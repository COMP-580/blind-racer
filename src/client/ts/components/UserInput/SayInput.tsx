/**
 * SayInput
 *
 * Button to say the input typed into the box.
 */

import * as React from "react";
import SpeechActions from "../../actions/SpeechActions";

class ToggleKeyboard extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onClick() {
    let word = $("#text-input").val();
    SpeechActions.spellWord(word);
  }

  public render() {
    return (
      <button id="say-input-btn" className="btn btn-default" onClick={this.onClick} disabled>
        <i className="fa fa-repeat fa-fw"></i>
      </button>
    );
  }
}

export default ToggleKeyboard;

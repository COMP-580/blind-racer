/**
 * SpellInput
 *
 * Button to spell the input typed into the box.
 */

import * as React from "react";
import GameActions from "../../actions/GameActions";
import SpeechActions from "../../actions/SpeechActions";

class SpellInput extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onClick() {
    GameActions.spellInput();
  }

  public render() {
    return (
      <button id="spell-input-btn" className="btn btn-default" onClick={this.onClick}>
        <i className="fa fa-repeat fa-fw"></i>3
      </button>
    );
  }
}

export default SpellInput;

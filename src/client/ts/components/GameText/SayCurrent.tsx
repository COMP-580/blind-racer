/**
 * SayCurrent
 *
 * Button to say the current word to type.
 */

import * as React from "react";
import GameActions from "../../actions/GameActions";

class SayCurrent extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onClick() {
    GameActions.sayCurrentWord();
  }

  public render() {
    return (
      <button id="say-current-btn" className="btn btn-default" onClick={this.onClick}>
        <i className="fa fa-adjust fa-fw"></i>1
      </button>
    );
  }
}

export default SayCurrent;

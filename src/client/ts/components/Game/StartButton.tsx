/**
 * StartButton
 *
 * Button for starting the game.
 */

import * as React from "react";
import GameActions from "../../actions/GameActions";
import TimingActions from "../../actions/TimingActions";

class StartButton extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onClick() {
    GameActions.startGame();
    TimingActions.startTyping();
  }

  public render() {
    return (
      <button className="btn btn-default" onClick={this.onClick}>
        <i className="fa fa-play-circle"></i>
      </button>
    );
  }
}

export default StartButton;

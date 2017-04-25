/**
 * SpellCurrent
 *
 * Button to spell the current word to type.
 */

import * as React from "react";
import GameActions from "../../actions/GameActions";

class SpellCurrent extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onClick() {
    GameActions.spellCurrentWord();
  }

  public render() {
    return (
      <button id="spell-current-btn" className="btn btn-default" onClick={this.onClick}>
        <i className="fa fa-adn fa-fw"></i>2
      </button>
    );
  }
}

export default SpellCurrent;

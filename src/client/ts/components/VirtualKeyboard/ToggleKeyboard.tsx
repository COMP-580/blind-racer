/**
 * ToggleKeyboard
 *
 * Button to toggle whether the keyboard is visible or not.
 */

import * as React from "react";
import VirtualKeyboardActions from "../../actions/VirtualKeyboardActions";

class ToggleKeyboard extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onClick() {
    VirtualKeyboardActions.toggleKeyboard();
  }

  public render() {
    return (
      <button className="btn btn-default" onClick={this.onClick}>
        {/*<span>Toggle Keyboard</span>*/}
        <i className="fa fa-keyboard-o fa-fw"></i>
      </button>
    );
  }
}

export default ToggleKeyboard;

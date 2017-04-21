/**
 * KeyboardCollapse
 *
 * Collapsible container for the keyboard.
 */

import * as React from "react";
import VirtualKeyboard from "./VirtualKeyboard";

class KeyboardCollapse extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div id="keyboard-collapse" className="collapse in keyboard-collapse">
        <VirtualKeyboard />
      </div>
    );
  }
}

export default KeyboardCollapse;

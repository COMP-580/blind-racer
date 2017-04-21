/**
 * Key
 *
 * Represents a key in the virtual keyboard.
 */

import * as React from "react";

class VirtualKeyboard extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <li id={this.props.id} className={"key key-width-" + this.props.width}>
        <span>{this.props.value}</span>
      </li>
    );
  }
}

export default VirtualKeyboard;

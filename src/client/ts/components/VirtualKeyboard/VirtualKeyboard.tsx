/**
 * VirtualKeyboard
 *
 * Container for a virtual keyboard. It does not have any user functionality, but it will display pressed keys.
 */

import * as React from "react";

class VirtualKeyboard extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div>
        <p>Virtual Keyboard Component</p>
      </div>
    );
  }
}

export default VirtualKeyboard;

/**
 * Instructions
 *
 * Component for displaying instructions under the navbar.
 */

import * as React from "react";

class Instructions extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div>
        <i className="fa fa-arrow-right"></i>
        <span>Hit shift+enter to play!</span>
      </div>
    );
  }
}

export default Instructions;

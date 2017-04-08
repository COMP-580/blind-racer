import * as React from "react";

import SampleActions from "../../actions/SampleActions";

class SampleButton extends React.Component<undefined, undefined> {

  public onClick() {
    SampleActions.updateLastClick(Date.now());
  }

  public render() {
    return (
      <button type="button" className="btn btn-primary" onClick={this.onClick}>Primary</button>
    );
  }
}

export default SampleButton;

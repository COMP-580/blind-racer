import * as React from "react";

import SampleButton from "./SampleButton";
import SampleText from "./SampleText";

class Sample extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div>
        <SampleButton />
        <SampleText />
      </div>
    );
  }
}

export default Sample;

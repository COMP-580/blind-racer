import * as React from "react";

import SpeedDisplayer from "./Timer/SpeedDisplayer";
import ViewBox from "./ViewBox";
import TextInput from "./WordInput/TextInput";

class Main extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div>
        <ViewBox id="view-box" />
        <TextInput id="text-input" defaultValue="" />
        <SpeedDisplayer />
      </div>
    );
  }
}

export default Main;

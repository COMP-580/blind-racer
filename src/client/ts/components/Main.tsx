import * as React from "react";

import Banner from "./Banner";
import SpeedDisplayer from "./Timer/SpeedDisplayer";
import ViewBox from "./ViewBox";
import TextInput from "./WordInput/TextInput";

class Main extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div>
        <h1>Test</h1>
        <Banner />
        <ViewBox id="view-box" />
        <TextInput id="text-input" defaultValue="" />
        <SpeedDisplayer />
      </div>
    );
  }
}

export default Main;

import * as React from "react";
import Banner from "./Banner";
import Sample from "./Sample/Sample";
import ViewBox from "./ViewBox";
import TextInput from "./WordInput/TextInput";

class Main extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div>
        <h1>Test</h1>
        <Banner />
        <Sample />
        <ViewBox id="view-box"/>
        <TextInput id="text-input" defaultValue=""/>
      </div>
    );
  }
}

export default Main;

import * as React from "react";
import Banner from "./Banner";
import Sample from "./Sample/Sample";

class Main extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div>
        <h1>Test</h1>
        <Banner />
        <Sample />
      </div>
    );
  }
}

export default Main;

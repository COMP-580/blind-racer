import * as React from "react";

import { ISampleStoreState, SampleStore } from "../../stores/SampleStore";

class SampleText extends React.Component<undefined, any> {

  constructor() {
    super();
    this.state = SampleStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  public componentDidMount() {
    SampleStore.listen(this.onChange);
  }

  public componentWillUnmount() {
    SampleStore.unlisten(this.onChange);
  }

  public onChange(state: ISampleStoreState ) {
    this.setState(state);
  }

  public render() {
    return (
      <h1>{this.state.lastClick}</h1>
    );
  }
}

export default SampleText;

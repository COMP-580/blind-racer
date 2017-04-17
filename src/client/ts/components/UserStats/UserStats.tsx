/**
 * UserStats
 *
 * Component for displaying user stats. Many of the fields are toggable so the user can hide distractions.
 */

import * as React from "react";

import { ITimerStoreState, TimerStore } from "../../stores/TimerStore";

class SpeedDisplayer extends React.Component<any, any> {

  constructor() {
    super();
    this.state = TimerStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  public componentDidMount() {
    TimerStore.listen(this.onChange);
  }

  public componentWillUnmount() {
    TimerStore.unlisten(this.onChange);
  }

  public onChange(state: ITimerStoreState ) {
    this.setState(state);
  }

  public render() {
    return (
      <div>
        <h1>Speed: {this.state.wpm}</h1>
      </div>
    );
  }
}

export default SpeedDisplayer;

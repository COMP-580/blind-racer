import * as React from "react";

import { GameTextStore, IGameTextStoreState } from "../stores/GameTextStore";

class ViewBox extends React.Component<any, any> {

  constructor() {
    super();
    this.state = GameTextStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  public componentDidMount() {
    GameTextStore.listen(this.onChange);
  }

  public onChange(state: IGameTextStoreState) {
    this.setState(state);
  }

  public componentWillUnMount() {
    GameTextStore.unlisten(this.onChange);
  }

  public render() {
    return(
      <div>
        <p>{this.props.id}</p>
        <p className="p-inline word-finished">
          {this.state.finishedWords.map((w: string[]) => {
            return w + " ";
          })}
        </p>
        <p className="p-inline word-current">
          {this.state.currentWord + " "}
        </p>
        <p className="p-inline word-unfinished">
          {this.state.unfinishedWords.map((w: string[]) => {
            return w + " ";
          })}
        </p>
      </div>
    );
  }
}

export default ViewBox;

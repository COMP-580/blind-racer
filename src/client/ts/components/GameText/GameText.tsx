/**
 * GameText
 *
 * Container for holding the text that the user is going to type.
 */

import * as React from "react";

import { GameTextStore, IGameTextStoreState } from "../../stores/GameTextStore";

class GameText extends React.Component<any, any> {

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
    return (
      <div className="row">
        <div className="col-xs-12">
          <div id="text-box">
            <p className="p-inline word-finished">
              {this.state.finishedWords.map((w: string[]) => {
                return w + " ";
              })}
            </p>
            <p className="p-inline word-current">
              {this.state.currentWord}
            </p>
            <p className="p-inline word-unfinished">
              {this.state.unfinishedWords.map((w: string[]) => {
                return " " + w;
              })}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default GameText;

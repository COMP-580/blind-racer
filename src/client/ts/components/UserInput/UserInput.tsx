/**
 * UserInput
 *
 * Component for the text form where the user will type into.
 */

import * as React from "react";

import GameActions from "../../actions/GameActions";
import TimingActions from "../../actions/TimingActions";

import { ITypingModeStoreState, TypingModeStore } from "../../stores/TypingModeStore";

class UserInput extends React.Component<any, any> {

  constructor() {
    super();
    this.changeMode = this.changeMode.bind(this);
    this.state = {};
  }

  public onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {
    this.state.keyPressHandler(e);
  }

  public componentDidMount() {
    TypingModeStore.listen(this.changeMode);
  }

  public compnentWillUnMount() {
    TypingModeStore.unlisten(this.changeMode);
  }

  public changeMode(state: ITypingModeStoreState) {
    this.state.keyPressHandler = state.keyPressHandler;
  }

  public render() {
    return(
      <div className="row">
        <div className="col-xs-12">
          <div className="user-input-div">
            <input
              id={this.props.id}
              className="form-control"
              type="text"
              placeholder={this.props.defaultValue}
              onKeyPress={this.onKeyPress.bind(this)}
              disabled
            />
          </div>
        </div>
      </div>
    );
  }
}

export default UserInput;

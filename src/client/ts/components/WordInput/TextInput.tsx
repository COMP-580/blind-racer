import * as React from "react";

import {ITypingModeStoreState, TypingModeStore} from "../../stores/TypingModeStore"

class TextInput extends React.Component<any, any> {
  constructor() {
    super();
    this.changeMode = this.changeMode.bind(this);
    this.state = {};
  }

  public onKeyPress(e: React.KeyboardEvent<HTMLInputElement>) {

    this.state.keyPressHandler(e);
  }

  public componentDidMount(){
    TypingModeStore.listen(this.changeMode);
  }
  public compnentWillUnMount(){
    TypingModeStore.unlisten(this.changeMode);

  }
  public changeMode(state: ITypingModeStoreState){
    this.state.keyPressHandler=state.keyPressHandler;
  }

  public render() {
    return(
      <div className="row">
        <input className="form-control" autoFocus type="text" defaultValue={this.props.defaultValue} id={this.props.id} onKeyPress={this.onKeyPress.bind(this)} />
      </div>
    );
  }
}

export default TextInput;

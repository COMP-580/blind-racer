import * as React from "react";
import { BoxStore, IBoxStoreState } from "../stores/BoxStore";

class ViewBox extends React.Component<any, any> {
  constructor() {
    super();
    this.state = BoxStore.getState();
    this.onChange=this.onChange.bind(this);
  }

  public componentDidMount() {
    BoxStore.listen(this.onChange);
  }

  public onChange(state: IBoxStoreState) {
    this.setState(state);
  }

  public componentWillUnMount() {
    BoxStore.unlisten(this.onChange);
  }

  public render() {
    return(
      <div>
        <p>{this.props.id}</p>
        <p className="p-inline word-finished">
          {this.state.finishedWords.map(function(w: string[]) {
            return w + " "
          })}
        </p>
        <p className="p-inline word-current">
          {this.state.currentWord + " "}
        </p>
        <p className="p-inline word-unfinished">
          {this.state.unfinishedWords.map(function(w: string[]) {
            return w + " "
          })}
        </p>
      </div>
    );
  }
}

export default ViewBox;

/**
 * RefreshLB
 *
 * Button for refreshing the leaderboard.
 */

import * as React from "react";
import LeaderboardActions from "../../actions/LeaderboardActions";

class RefreshLB extends React.Component<any, any> {

  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
  }

  public onClick(e: any) {
    e.preventDefault();
    LeaderboardActions.refreshLeaderboard();
  }

  public render() {
    return (
      <button id="refresh-lb-btn" className="btn btn-default" onClick={this.onClick}>
        <i id="refresh-lb-fa" className="fa fa-refresh"></i>
      </button>
    );
  }
}

export default RefreshLB;

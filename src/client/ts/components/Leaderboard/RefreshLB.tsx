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
      <a href="#" onClick={this.onClick}>
        <i id="refresh-lb-fa" className="fa fa-refresh fa-fw pull-right"></i>
      </a>
    );
  }
}

export default RefreshLB;

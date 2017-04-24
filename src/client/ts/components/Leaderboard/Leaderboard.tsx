/**
 * Leaderboard
 *
 * Component for displaying a simple table of leaderboard scores.
 */

import * as React from "react";

import RefreshLB from "./RefreshLB";

import { ILeaderboardStoreState, LeaderboardStore } from "../../stores/LeaderboardStore";

class Leaderboard extends React.Component<any, any> {

  constructor() {
    super();
    this.state = LeaderboardStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  public componentDidMount() {
    LeaderboardStore.listen(this.onChange);
  }

  public componentWillUnmount() {
    LeaderboardStore.unlisten(this.onChange);
  }

  public onChange(state: ILeaderboardStoreState ) {
    this.setState(state);
  }

  public render() {
    return (
      <div id="leaderboard">

        <div id="lb-overlay">
        </div>

        <div id="lb-container">
          <legend className="legend">Leaderboard<RefreshLB /></legend>

          <h4>Hourly</h4>
          <table className="table table-striped table-condensed table-hover lb-table">
            <tbody>
              {this.state.hourlyScores.map((s: any, i: number) => {
                return (
                  <tr key={"hourly-" + i} className="lb-table-row">
                    <td className="lb-table-td">{s.username}</td>
                    <td className="lb-table-td">{s.score}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <h4>Daily</h4>
          <table className="table table-striped table-condensed table-hover lb-table">
            <tbody>
              {this.state.dailyScores.map((s: any, i: number) => {
                return (
                  <tr key={"hourly-" + i} className="lb-table-row">
                    <td className="lb-table-td">{s.username}</td>
                    <td className="lb-table-td">{s.score}</td>
                  </tr>
                );
              })}
            </tbody>

          </table>

        </div>

      </div>
    );
  }
}

export default Leaderboard;

/**
 * Leaderboard
 *
 * Component for displaying a simple table of leaderboard scores.
 */

import * as React from "react";

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

          <table className="table table-striped table-condensed table-hover lb-table">
            <caption>Hourly</caption>

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

          {/*<p>Hourly</p>
          {this.state.hourlyScores.map((s: any, i: number) => {
            return (
              <div key={i}>
                <span>{s.username} - {s.score}</span>
              </div>
            );
          })}
          <p>Daily</p>
          {this.state.dailyScores.map((s: any, i: number) => {
            return (
              <div key={i}>
                <span>{s.username} - {s.score}</span>
              </div>
            );
          })}*/}
        </div>

      </div>
    );
  }
}

export default Leaderboard;

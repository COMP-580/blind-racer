/**
 * SubmitScoreModal
 *
 * Modal for submitting a high score.
 */

import * as React from "react";
import LeaderboardActions from "../../../actions/LeaderboardActions";

import { ITimerStoreState, TimerStore } from "../../../stores/TimerStore";

class SubmitScoreModal extends React.Component<any, any> {

  constructor() {
    super();
    this.state = TimerStore.getState();
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  public componentDidMount() {
    TimerStore.listen(this.onChange);
    $("#submit-score-modal").on("shown.bs.modal", (e) => {
      $("#submit-username").focus();
    });
  }

  public componentWillUnmount() {
    TimerStore.unlisten(this.onChange);
  }

  public onChange(state: ITimerStoreState ) {
    this.setState(state);
  }

  public onSubmit(e: any) {
    e.preventDefault();
    let username = $("#submit-username").val();
    let score = this.state.wpm;
    LeaderboardActions.submitLeaderboard({username, score});
    $("#submit-score-modal").modal("hide");
    $("#submit-username").val("");
  }

  public render() {
    return (
      <div id="submit-score-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog modal-sm" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Submit Score - {this.state.wpm} WPM</h4>
            </div>

            <div className="modal-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group no-bottom-padding">
                  <label htmlFor="submit-username">Username:</label>
                  <input id="submit-username" type="text" className="form-control" maxLength={16}/>
                  <div className="text-center">
                    <button type="submit" className="btn btn-default">Submit</button>
                  </div>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default SubmitScoreModal;

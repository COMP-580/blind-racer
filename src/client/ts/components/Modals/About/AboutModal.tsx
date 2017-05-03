/**
 * AboutModal
 *
 * Modal for displaying information about the app and programmers.
 */

import * as React from "react";

class AboutModal extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div id="about-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">About</h4>
            </div>

            <div className="modal-body">
              <p>This is a COMP-580 project by Samantha Lin, Daniel Nguyen, and Tony Zhu.</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default AboutModal;

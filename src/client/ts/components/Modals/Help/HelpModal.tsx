/**
 * HelpModal
 *
 * Modal for explaining how to use the app.
 */

import * as React from "react";

class HelpModal extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div id="help-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">

            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Help</h4>
            </div>

            <div className="modal-body">
              <p>TypeZone's purpose is to help improve the keyboard competency of people with visual impairments.</p>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default HelpModal;

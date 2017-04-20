/**
 * SettingsContent
 *
 * Content inside the SettingsModal.
 */

import * as React from "react";

class SettingsModal extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div className="modal-content">

        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title">Settings</h4>
        </div>

        <div className="modal-body">
          <p>Lots of nice and cool settings</p>
        </div>

      </div>
    );
  }
}

export default SettingsModal;

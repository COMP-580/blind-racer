/**
 * SettingsContent
 *
 * Content inside the SettingsModal.
 */

import * as React from "react";

import ColorTheme from "./Form/ColorTheme";
import Modes from "./Form/Modes";
import Punctuation from "./Form/Punctuation";
import Volume from "./Form/Volume/Volume";

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
          <h3 className="modal-title">Settings</h3>
        </div>

        <div className="modal-body">

          <Modes />

          <Volume />

          <legend>Advanced</legend>
          <Punctuation />

        </div>

      </div>
    );
  }
}

export default SettingsModal;

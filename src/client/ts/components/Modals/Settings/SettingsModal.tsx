/**
 * SettingsModal
 *
 * Modal for configuring the different client settings.
 */

import * as React from "react";
import SettingsContent from "./SettingsContent";

class SettingsModal extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div id="settings-modal" className="modal fade" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          {/*<SettingsContent />*/}
        </div>
      </div>
    );
  }
}

export default SettingsModal;

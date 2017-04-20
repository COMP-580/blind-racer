/**
 * SettingsButton
 *
 * Button for opening the Settings modal.
 */

import * as React from "react";
import ModalActions from "../../../actions/ModalActions";
import { Modal } from "../../../enums/Modal";

class SettingsButton extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onClick(e: any) {
    e.preventDefault();
    ModalActions.openModal(Modal.SETTINGS);
  }

  public render() {
    return (
      <a href="#" onClick={this.onClick}>
        <span>Settings </span>
        <i className="fa fa-cogs fa-fw pull-right"></i>
      </a>
    );
  }
}

export default SettingsButton;

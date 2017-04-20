/**
 * HelpButton
 *
 * Button for opening the Help modal.
 */

import * as React from "react";
import ModalActions from "../../../actions/ModalActions";
import { Modal } from "../../../enums/Modal";

class HelpButton extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onClick(e: any) {
    e.preventDefault();
    ModalActions.openModal(Modal.HELP);
  }

  public render() {
    return (
      <a href="#" onClick={this.onClick}>
        <span>Help</span>
        <i className="fa fa-question fa-fw pull-right"></i>
      </a>
    );
  }
}

export default HelpButton;

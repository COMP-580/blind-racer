/**
 * AboutButton
 *
 * Button for opening the About modal.
 */

import * as React from "react";
import ModalActions from "../../../actions/ModalActions";
import { Modal } from "../../../enums/Modal";

class AboutButton extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onClick(e: any) {
    e.preventDefault();
    ModalActions.openModal(Modal.ABOUT);
  }

  public render() {
    return (
      <a href="#" onClick={this.onClick}>
        {/*<span>About</span>*/}
        <i className="fa fa-info-circle fa-fw"></i>
      </a>
    );
  }
}

export default AboutButton;

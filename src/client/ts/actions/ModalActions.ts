/**
 * ModalActions
 *
 * Actions in charge of opening and closing modals.
 */

import { AbstractActions, alt } from "../alt";

import Modal from "../enums/Modal";

interface IModalActions {
  openModal(modal: Modal): void;
}

class ModalActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "openModal",
    );
  }
}

export default alt.createActions<IModalActions>(ModalActions);

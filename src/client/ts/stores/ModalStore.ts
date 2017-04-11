/**
 * ModalStore
 *
 * In charge of opening modals.
 */

import { AbstractStoreModel, alt } from "../alt";

import ModalActions from "../actions/ModalActions";

import { Modal } from "../enums/Modal";

interface IModalStoreState {
  currentModal: string;
}

class AltModalStore extends AbstractStoreModel<IModalStoreState> implements IModalStoreState {

  public currentModal: string;

  constructor() {
    super();
    this.currentModal = null;

    this.bindAction(ModalActions.openModal, this.onOpenModal);
  }

  public onOpenModal(modal: Modal) {
    if (modal === Modal.ABOUT) {
      this.openAboutModal();
    } else if (modal === Modal.HELP) {
      this.openHelpModal();
    } else if (modal === Modal.SETTINGS) {
      this.openSettingsModal();
    }
  }

  public openAboutModal() {
    let aboutId = "about-modal";
    let aboutModal = $("#" + aboutId);
    this.currentModal = aboutId;
  }

  public openHelpModal() {
    let helpId = "help-modal";
    let helpModal = $("#" + helpId);
    this.currentModal = helpId;

  }

  public openSettingsModal() {
    let settingsId = "settings-modal";
    let settingsModal = $("#" + settingsId);
    this.currentModal = settingsId;
  }

}

let ModalStore = alt.createStore(AltModalStore, "ModalStore");
export { IModalStoreState, ModalStore }

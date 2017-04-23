/**
 * ModalStore
 *
 * In charge of opening modals.
 */

import { AbstractStoreModel, alt } from "../alt";

import GameActions from "../actions/GameActions";
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

    this.bindAction(GameActions.startGame, this.onStartGame);
    this.bindAction(ModalActions.openModal, this.onOpenModal);
  }

  public onStartGame() {
    if (this.currentModal) {
      let currentModal = $("#" + this.currentModal);
      currentModal.modal("hide");
    }
  }

  public onOpenModal(modal: Modal) {
    if (modal === Modal.ABOUT) {
      this.openAboutModal();
    } else if (modal === Modal.HELP) {
      this.openHelpModal();
    } else if (modal === Modal.SETTINGS) {
      this.openSettingsModal();
    } else if (modal === Modal.SUBMIT_SCORE) {
      this.openSubmitScoreModal();
    }
  }

  public openAboutModal() {
    let aboutId = "about-modal";
    let aboutModal = $("#" + aboutId);
    aboutModal.modal("show");
    this.currentModal = aboutId;
  }

  public openHelpModal() {
    let helpId = "help-modal";
    let helpModal = $("#" + helpId);
    helpModal.modal("show");
    this.currentModal = helpId;

  }

  public openSettingsModal() {
    let settingsId = "settings-modal";
    let settingsModal = $("#" + settingsId);
    settingsModal.modal("show");
    this.currentModal = settingsId;
  }

  public openSubmitScoreModal() {
    let submitScoreId = "submit-score-modal";
    let submitScoreModal = $("#" + submitScoreId);
    submitScoreModal.modal("show");
    this.currentModal = submitScoreId;
  }

}

let ModalStore = alt.createStore(AltModalStore, "ModalStore");
export { IModalStoreState, ModalStore }

/**
 * ModalActions
 *
 * Actions in charge of opening and closing modals.
 */

import { AbstractActions, alt } from "../alt";

interface IModalActions {
  openAbout(): void;
  openHelp(): void;
  openSettings(): void;
}

class ModalActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "openAbout",
      "openHelp",
      "openSettings",
    );
  }
}

export default alt.createActions<IModalActions>(ModalActions);

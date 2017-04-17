/**
 * TimingActions
 *
 * Actions related to calculating the user's typing speed.
 */

import { AbstractActions, alt } from "../alt";

interface ITimingActions {
  startTyping(): void;
  stopTyping(): void;
  updateTimer(): void;
}

class TimingActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "startTyping",
      "stopTyping",
      "updateTimer",
    );
  }
}

export default alt.createActions<ITimingActions>(TimingActions);

/**
 * SoundActions
 *
 * Actions related to producing sound on the client, such as loading and playings sounds.
 */

import { AbstractActions, alt } from "../alt";

interface ISoundActions {
  loadSound(s: {name: string, path: string, volume?: number}): void;
  playSound(name: string): void;
}

class SoundActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "loadSound",
      "playSound",
    );
  }
}

export default alt.createActions<ISoundActions>(SoundActions);

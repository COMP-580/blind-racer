/**
 * SpeechActions
 *
 * Actions related to speech, such as synthesizing speech.
 */

import { AbstractActions, alt } from "../alt";

interface ISpeechActions {
  sayText(text: string): void;
  spellWord(word: string): void;
}

class SpeechActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "sayText",
      "spellWord",
    );
  }
}

export default alt.createActions<ISpeechActions>(SpeechActions);

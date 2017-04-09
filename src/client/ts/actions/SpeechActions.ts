import { AbstractActions, alt } from "../alt";

interface ISpeechActions {
  sayText(text: string): void;
}

class SpeechActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "sayText",
    );
  }
}

export default alt.createActions<ISpeechActions>(SpeechActions);

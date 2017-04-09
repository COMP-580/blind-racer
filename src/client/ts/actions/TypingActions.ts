import { AbstractActions, alt } from "../alt";

interface ITypingActions {
  typeChar(char: string): void;
  typeWord(word: string): void;
  changeMode(mode: number): void;
}

class TypingActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "typeChar",
      "typeWord",
      "changeMode",
    );
  }
}

export default alt.createActions<ITypingActions>(TypingActions);

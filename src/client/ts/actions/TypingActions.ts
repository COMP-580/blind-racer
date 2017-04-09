import { AbstractActions, alt } from "../alt";

interface ITypingActions {
  typedWord(word: string): void;
  startTyping(): void;
  updateTimer(): void;
  stopTyping(): void;
  typeChar(char: string): void;
  typeWord(word: string): void;
  changeMode(mode: number): void;
}

class TypingActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "typedWord",
      "startTyping",
      "updateTimer",
      "stopTyping",
      "typeChar",
      "typeWord",
      "changeMode",
    );
  }
}

export default alt.createActions<ITypingActions>(TypingActions);

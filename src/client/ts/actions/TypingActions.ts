/**
 * TypingActions
 *
 * Actions related to when the user is typing in the user input box.
 */

import { AbstractActions, alt } from "../alt";

interface ITypingActions {
  typeChar(char: string): void;
  charSuccess(char: string): void;
  charFail(char: string, expected: string): void;

  typeWord(word: string): void;
  wordSuccess(word: string): void;
  wordFail(word: string, expected: string): void;
}

class TypingActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "typeChar",
      "charSuccess",
      "charFail",
      "typeWord",
      "wordSuccess",
      "wordFail",
    );
  }
}

export default alt.createActions<ITypingActions>(TypingActions);

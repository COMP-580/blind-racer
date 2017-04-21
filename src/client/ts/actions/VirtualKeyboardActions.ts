/**
 * VirtualKeyboardActions
 *
 * Actions related to coloring the virtual keyboard.
 */

import { AbstractActions, alt } from "../alt";

interface ITypingActions {
  colorKey(key: {id: string, classType: string}): void;
  uncolorKey(key: {id: string, classType: string}): void;
  uncolorAllKeys(): void;
  toggleKeyboard(): void;
}

class TypingActions extends AbstractActions {
  constructor(config: AltJS.Alt) {
    super(config);
    this.generateActions(
      "colorKey",
      "uncolorKey",
      "uncolorAllKeys",
      "toggleKeyboard",
    );
  }
}

export default alt.createActions<ITypingActions>(TypingActions);

/**
 * VirtualKeyboardStore
 *
 * Keeps the state of the virtual keyboard
 */

import { AbstractStoreModel, alt } from "../alt";

import VirtualKeyboardActions from "../actions/VirtualKeyboardActions";

interface IVirtualKeyboardStoreState {
  pressedKeys: {[key: string]: string[]};
}

class AltVirtualKeyboardStore extends AbstractStoreModel<IVirtualKeyboardStoreState>
  implements IVirtualKeyboardStoreState {

  public pressedKeys: {[key: string]: string[]};
  public idPrefix: string;
  public keyboardCollapse: any;

  constructor() {
    super();
    this.pressedKeys = {};
    this.idPrefix = "#vkb-";
    this.keyboardCollapse = null;

    this.bindAction(VirtualKeyboardActions.colorKey, this.onColorKey);
    this.bindAction(VirtualKeyboardActions.uncolorKey, this.onUncolorKey);
    this.bindAction(VirtualKeyboardActions.uncolorAllKeys, this.onUncolorAllKeys);
    this.bindAction(VirtualKeyboardActions.toggleKeyboard, this.onToggleKeyboard);
  }

  public onColorKey(keyInfo: {id: string, classType: string}) {
    let id = keyInfo.id;
    let classType = keyInfo.classType;

    // No point in processing again
    if (this.pressedKeys[id] && this.pressedKeys[id].indexOf(classType) > -1) {
      return;
    }

    // Add the class to the correct key found in VirtualKeyboard.tsx
    let key = $(this.idPrefix + id);
    key.addClass(classType);

    // Keep track the list of classes
    if (this.pressedKeys[id]) {
      this.pressedKeys[id].push(classType);
    } else {
      this.pressedKeys[id] = [classType];
    }
  }

  public onUncolorKey(keyInfo: {id: string, classType: string}) {
    let id = keyInfo.id;
    let classType = keyInfo.classType;
    if (this.pressedKeys[id]) {
      this.pressedKeys[id].map((c, i) => {
        if (c === classType) {
          $(this.idPrefix + id).removeClass(classType);
          this.pressedKeys[id].splice(i, 1);
        }
      });
    }
  }

  public onUncolorAllKeys() {
    for (let id in this.pressedKeys) {
      if (!this.pressedKeys.hasOwnProperty(id)) {
        continue;
      }
      let virtualKey = $(this.idPrefix + id);
      this.pressedKeys[id].map((classType) => {
        virtualKey.removeClass(classType);
      });
      this.pressedKeys[id] = [];
    }
  }

  public onToggleKeyboard() {
    if (this.keyboardCollapse) {
      this.keyboardCollapse.collapse("toggle");
    } else {
      this.keyboardCollapse = $("#keyboard-collapse");
      this.keyboardCollapse.collapse("toggle");
    }
  }

}
let VirtualKeyboardStore = alt.createStore(AltVirtualKeyboardStore, "VirtualKeyboardStore");
export { IVirtualKeyboardStoreState, VirtualKeyboardStore }

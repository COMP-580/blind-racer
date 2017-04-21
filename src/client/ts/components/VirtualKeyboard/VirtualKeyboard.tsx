/**
 * VirtualKeyboard
 *
 * Container for a virtual keyboard. It does not have any user functionality, but it will display pressed keys.
 */

import * as React from "react";

import VirtualKeyboardActions from "../../actions/VirtualKeyboardActions";

import Key from "./Key";

class VirtualKeyboard extends React.Component<any, any> {

  public pressedKeys: {[key: string]: boolean};

  constructor() {
    super();
    this.componentDidMount = this.componentDidMount.bind(this);
    this.componentWillUnmount = this.componentWillUnmount.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  public componentDidMount() {
    $(document).on({keydown: this.onKeyDown});
    $(document).on({keyup: this.onKeyUp});
    $(window).on({blur: this.onBlur});
    this.pressedKeys = {};
  }

  public componentWillUnmount() {
    $(document).off({keydown: this.onKeyDown});
    $(document).off({keyup: this.onKeyUp});
    $(window).off({blur: this.onBlur});
    this.pressedKeys = {};
  }

  public onBlur() {
    VirtualKeyboardActions.uncolorAllKeys();
  }

  public onKeyDown(e: React.KeyboardEvent<HTMLDivElement>) {

    // Get full id of the keypress
    let id = e.which.toString();
    if ((e as any).originalEvent.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
      id += "-l";
    } else if ((e as any).originalEvent.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      id += "-r";
    }
    VirtualKeyboardActions.colorKey({id, classType: "key-pressed"});
  }

  public onKeyUp(e: React.KeyboardEvent<HTMLDivElement>) {

    // Get full id of the keypress
    let id = e.which.toString();
    if ((e as any).originalEvent.location === KeyboardEvent.DOM_KEY_LOCATION_LEFT) {
      id += "-l";
    } else if ((e as any).originalEvent.location === KeyboardEvent.DOM_KEY_LOCATION_RIGHT) {
      id += "-r";
    }
    VirtualKeyboardActions.uncolorKey({id, classType: "key-pressed"});
  }

  public render() {
    return (
      <div className="row keyboard">

        <ul id="kb-r1" className="row keyboard-row">
          <Key id="vkb-192" value="`" width="1" />
          <Key id="vkb-49" value="1" width="1" />
          <Key id="vkb-50" value="2" width="1" />
          <Key id="vkb-51" value="3" width="1" />
          <Key id="vkb-52" value="4" width="1" />
          <Key id="vkb-53" value="5" width="1" />
          <Key id="vkb-54" value="6" width="1" />
          <Key id="vkb-55" value="7" width="1" />
          <Key id="vkb-56" value="8" width="1" />
          <Key id="vkb-57" value="9" width="1" />
          <Key id="vkb-48" value="0" width="1" />
          <Key id="vkb-189" value="-" width="1" />
          <Key id="vkb-187" value="=" width="1" />
          <Key id="vkb-8" value="backspace" width="2"/>
        </ul>

        <ul id="kb-r2" className="row keyboard-row">
          <Key id="vkb-9" value="tab" width ="1.5" />
          <Key id="vkb-81" value="q" width ="1" />
          <Key id="vkb-87" value="w" width ="1" />
          <Key id="vkb-69" value="e" width ="1" />
          <Key id="vkb-82" value="r" width ="1" />
          <Key id="vkb-84" value="t" width ="1" />
          <Key id="vkb-89" value="y" width ="1" />
          <Key id="vkb-85" value="u" width ="1" />
          <Key id="vkb-73" value="i" width ="1" />
          <Key id="vkb-79" value="o" width ="1" />
          <Key id="vkb-80" value="p" width ="1" />
          <Key id="vkb-219" value="[" width ="1" />
          <Key id="vkb-221" value="]" width ="1" />
          <Key id="vkb-220" value="\\" width ="1.5" />
        </ul>

        <ul id="kb-r3" className="keyboard-row">
          <Key id="vkb-20" value="caps lock" width="1.75" />
          <Key id="vkb-65" value="a" width="1" />
          <Key id="vkb-83" value="s" width="1" />
          <Key id="vkb-68" value="d" width="1" />
          <Key id="vkb-70" value="f" width="1" />
          <Key id="vkb-71" value="g" width="1" />
          <Key id="vkb-72" value="h" width="1" />
          <Key id="vkb-74" value="j" width="1" />
          <Key id="vkb-75" value="k" width="1" />
          <Key id="vkb-76" value="l" width="1" />
          <Key id="vkb-186" value=";" width="1" />
          <Key id="vkb-222" value="'" width="1" />
          <Key id="vkb-13" value="enter" width="2.25" />
        </ul>

        <ul id="kb-r4" className="keyboard-row">
          <Key id="vkb-16-l" value="shift" width="2.25" />
          <Key id="vkb-90" value="z" width="1" />
          <Key id="vkb-88" value="x" width="1" />
          <Key id="vkb-67" value="c" width="1" />
          <Key id="vkb-86" value="v" width="1" />
          <Key id="vkb-66" value="b" width="1" />
          <Key id="vkb-78" value="n" width="1" />
          <Key id="vkb-77" value="m" width="1" />
          <Key id="vkb-188" value="," width="1" />
          <Key id="vkb-190" value="." width="1" />
          <Key id="vkb-191" value="/" width="1" />
          <Key id="vkb-16-r" value="shift" width="2.75" />
        </ul>

        <ul id="kb-r5" className="keyboard-row">
          <Key id="vkb-17-l" value="ctrl" width="1.25" />
          <Key id="vkb-91-l" value="os" width="1.25" />
          <Key id="vkb-18-l" value="alt" width="1.25" />
          <Key id="vkb-32" value="space" width="6.25" />
          <Key id="vkb-18-r" value="alt" width="1.25" />
          <Key id="vkb-92-r" value="os" width="1.25" />
          <Key id="vkb-93" value="menu" width="1.25" />
          <Key id="vkb-17-r" value="ctrl" width="1.25" />
        </ul>
      </div>
    );
  }
}

export default VirtualKeyboard;

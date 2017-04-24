/**
 * Volume
 *
 * Volume controller.
 */

/* tslint:disable:object-literal-sort-keys */

import * as React from "react";
import MasterVolume from "./MasterVolume";
import SoundVolume from "./SoundVolume";
import SpeechVolume from "./SpeechVolume";

class Volume extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <form className="form-horizontal">

        <div className="form-group no-bottom-padding">
          <label className="form-label col-xs-3 "><b>Master</b></label>
          <div className="col-xs-9"><MasterVolume /></div>
        </div>

        <div className="form-group no-bottom-padding">
          <label className="form-label col-xs-3 "><b>Sounds</b></label>
          <div className="col-xs-9"><SoundVolume /></div>
        </div>

        <div className="form-group">
          <label className="form-label col-xs-3 no-bottom-padding"><b>Speech</b></label>
          <div className="col-xs-9"><SpeechVolume /></div>
        </div>

      </form>
    );
  }
}

export default Volume;

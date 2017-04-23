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
        <legend>Volume</legend>

        <div className="form-group ">
          <label className="control-label col-xs-2" htmlFor="master-volume-slider">Master</label>
          <MasterVolume />
        </div>

        <div className="form-group">
          <label className="control-label col-xs-2" htmlFor="sound-volume-slider">Sounds</label>
          <SoundVolume />
        </div>

        <div className="form-group">
          <label className="control-label col-xs-2" htmlFor="speech-volume-slider">Speech</label>
          <SpeechVolume />
        </div>

      </form>
    );
  }
}

export default Volume;

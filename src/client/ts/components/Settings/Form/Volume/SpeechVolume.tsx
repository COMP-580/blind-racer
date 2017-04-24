/**
 * SpeechVolume
 *
 * Slider for controlling the volume of speech.
 */

/* tslint:disable:object-literal-sort-keys */

import * as Cookies from "js-cookie";
import * as React from "react";
import SettingsActions from "../../../../actions/SettingsActions";

class SpeechVolume extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onVolumeChange(event: any) {
    let newVal = $("#speech-volume-slider").data("slider").getValue();
    SettingsActions.changeSpeechVolume(newVal);
  }

  public componentDidMount() {
    // Create the slider
    $("#speech-volume-slider").slider({
      min: 0,
      max: 1,
      step: 0.01,
      value: Cookies.get("speechVolume") || 0.5,
      tooltip: "hide",
    });

    // Attach handler
    $("#speech-volume-slider").slider().on("change", this.onVolumeChange);
  }

  public componentWillUnmount() {
     $("#speech-volume-slider").slider().off("change", this.onVolumeChange);
  }

  public render() {
    return (
      <input id="speech-volume-slider" className="volume-slider" type="text" />
    );
  }
}

export default SpeechVolume;

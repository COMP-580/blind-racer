/**
 * SoundVolume
 *
 * Slider for controlling the volume of sounds.
 */

/* tslint:disable:object-literal-sort-keys */

import * as Cookies from "js-cookie";
import * as React from "react";
import SettingsActions from "../../../../actions/SettingsActions";

class SoundVolume extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onVolumeChange(event: any) {
    let newVal = $("#sound-volume-slider").data("slider").getValue();
    SettingsActions.changeSoundVolume(newVal);
  }

  public componentDidMount() {
    // Create the slider
    $("#sound-volume-slider").slider({
      min: 0,
      max: 1,
      step: 0.01,
      value: Cookies.get("soundVolume") || 0.5,
      tooltip: "hide",
    });

    // Attach handler
    $("#sound-volume-slider").slider().on("change", this.onVolumeChange);
  }

  public componentWillUnmount() {
     $("#sound-volume-slider").slider().off("change", this.onVolumeChange);
  }

  public render() {
    return (
      <input id="sound-volume-slider" className="volume-slider" type="text" />
    );
  }
}

export default SoundVolume;

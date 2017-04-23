/**
 * MasterVolume
 *
 * Slider for controlling the master volume.
 */

/* tslint:disable:object-literal-sort-keys */

import * as Cookies from "js-cookie";
import * as React from "react";
import SettingsActions from "../../../../../actions/SettingsActions";

class MasterVolume extends React.Component<any, any> {

  constructor() {
    super();
  }

  public onVolumeChange(event: any) {
    let newVal = $("#master-volume-slider").data("slider").getValue();
    SettingsActions.changeMasterVolume(newVal);
  }

  public componentDidMount() {
    // Create the slider
    $("#master-volume-slider").slider({
      min: 0,
      max: 1,
      step: 0.01,
      value: Cookies.get("masterVolume") || 0.5,
      tooltip: "hide",
    });

    // Attach handler
    $("#master-volume-slider").slider().on("change", this.onVolumeChange);
  }

  public componentWillUnmount() {
     $("#master-volume-slider").slider().off("change", this.onVolumeChange);
  }

  public render() {
    return (
      <input id="master-volume-slider" type="text" />
    );
  }
}

export default MasterVolume;

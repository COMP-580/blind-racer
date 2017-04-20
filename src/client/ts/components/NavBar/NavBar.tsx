/**
 * NavBar
 *
 * Container for holding the fixed navigation bar at the top of the screen.
 */

import * as React from "react";

import AboutButton from "../Modals/About/AboutButton";
import HelpButton from "../Modals/Help/HelpButton";
import SettingsButton from "../Modals/Settings/SettingsButton";

class NavBar extends React.Component<any, any> {

  constructor() {
    super();
  }

  public render() {
    return (
      <div>
        <ul className="sidebar-nav">
          <li><AboutButton /></li>
          <li><HelpButton /></li>
          <li><SettingsButton /></li>
        </ul>

      </div>
    );
  }
}

export default NavBar;

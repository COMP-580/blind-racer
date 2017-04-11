/**
 * Main
 *
 * Entrypoint component.
 */

import * as React from "react";

import GameText from "./GameText/GameText";
import NavBar from "./NavBar/NavBar";
import UserInput from "./UserInput/UserInput";
import UserStats from "./UserStats/UserStats";
import VirtualKeyboard from "./VirtualKeyboard/VirtualKeyboard";

// Include modals at the top level component
import AboutModal from "./Modals/AboutModal";
import HelpModal from "./Modals/HelpModal";
import SettingsModal from "./Modals/Settings/SettingsModal";

class Main extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div className="container-fluid">

        <NavBar />

        <div>
          <GameText id="view-box" />
          <UserInput id="text-input" defaultValue="" />
          <UserStats />
          <VirtualKeyboard />
          <NavBar />
        </div>

        <AboutModal />
        <HelpModal />
        <SettingsModal />

      </div>
    );
  }
}

export default Main;

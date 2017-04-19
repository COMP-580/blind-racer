/**
 * Main
 *
 * Entrypoint component.
 */

import * as React from "react";

import GameText from "./GameText/GameText";
import Leaderboard from "./Leaderboard/Leaderboard";
import NavBar from "./NavBar/NavBar";
import Title from "./Title/Title";
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
      <div className="container">

        <div className="row vertical-center">

          <div className="col-xs-offset-2 col-xs-8">
            <div className="row">
              <Title />
            </div>

            <div className="row row-same-height">
              <div className="col-xs-3 force-column-height">
                <NavBar />
              </div>

              <div className="col-xs-6 force-column-height">
                <GameText id="view-box" />
                <UserInput id="text-input" defaultValue="" />
                <UserStats />
              </div>

              <div className="col-xs-3 force-clumn-height">
                <Leaderboard />
              </div>

              <div className="col-xs-12">
                <VirtualKeyboard />
              </div>
            </div>
          </div>

        </div>

          <AboutModal />
          <HelpModal />
          <SettingsModal />

      </div>
    );
  }
}

export default Main;

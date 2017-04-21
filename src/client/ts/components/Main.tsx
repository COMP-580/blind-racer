/**
 * Main
 *
 * Entrypoint component.
 */

import * as React from "react";

import StartButton from "./Game/StartButton";
import GameText from "./GameText/GameText";
import Instructions from "./Instructions/Instructions";
import Leaderboard from "./Leaderboard/Leaderboard";
import RefreshLB from "./Leaderboard/RefreshLB";
import NavBar from "./NavBar/NavBar";
import Title from "./Title/Title";
import UserInput from "./UserInput/UserInput";
import UserStats from "./UserStats/UserStats";
import KeyboardCollapse from "./VirtualKeyboard/KeyboardCollapse";
import ToggleKeyboard from "./VirtualKeyboard/ToggleKeyboard";

// Include modals at the top level component
import AboutModal from "./Modals/About/AboutModal";
import HelpModal from "./Modals/Help/HelpModal";
import SettingsContent from "./Modals/Settings/SettingsContent";
import SettingsModal from "./Modals/Settings/SettingsModal";
import SubmitScoreModal from "./Modals/SubmitScore/SubmitScoreModal";

class Main extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div className="container">

        <div className="row vertical-center">

          <div className="col-xs-offset-1 col-xs-10">
            <div className="row">
              <Title />
            </div>

            <div className="row row-same-height">
              <div className="col-xs-3 force-column-height">
                <NavBar />
                <Instructions />
              </div>

              <div className="col-xs-6 force-column-height">
                <GameText id="view-box" />
                <UserInput id="text-input" defaultValue="" />
                <UserStats />
              </div>

              <div className="col-xs-3 force-column-height">
                <RefreshLB />
                <Leaderboard />
              </div>

              <div className="col-xs-12">
                <div className="text-center">
                  <ToggleKeyboard />
                  <StartButton />
                </div>
                <KeyboardCollapse />
              </div>
            </div>
          </div>

        </div>

          <AboutModal />
          <HelpModal />
          <SettingsModal />
          <SubmitScoreModal />

          <SettingsContent />

      </div>
    );
  }
}

export default Main;

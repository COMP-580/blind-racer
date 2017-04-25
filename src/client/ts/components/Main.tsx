/**
 * Main
 *
 * Entrypoint component.
 */

import * as React from "react";

import StartButton from "./Game/StartButton";
import GameText from "./GameText/GameText";
import SpellCurrent from "./GameText/SpellCurrent";
import Instructions from "./Instructions/Instructions";
import Leaderboard from "./Leaderboard/Leaderboard";
import Logo from "./Logo/Logo";
import AboutButton from "./Modals/About/AboutButton";
import HelpButton from "./Modals/Help/HelpButton";
import Settings from "./Settings/Settings";
import Title from "./Title/Title";
import SayInput from "./UserInput/SayInput";
import UserInput from "./UserInput/UserInput";
import UserStats from "./UserStats/UserStats";
import KeyboardCollapse from "./VirtualKeyboard/KeyboardCollapse";
import ToggleKeyboard from "./VirtualKeyboard/ToggleKeyboard";

// Include modals at the top level component
import AboutModal from "./Modals/About/AboutModal";
import HelpModal from "./Modals/Help/HelpModal";
import SubmitScoreModal from "./Modals/SubmitScore/SubmitScoreModal";

class Main extends React.Component<undefined, undefined> {
  public render() {
    return (
      <div>

        <nav className="navbar navbar-default navbar-clear">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-right">
              <li><AboutButton /></li>
              <li><HelpButton /></li>
            </ul>
          </div>
        </nav>

        <div className="container">

          <div className="row vertical-center">

            <div className="col-xs-12">

              <div className="row">
                <div className="text-center">
                  <Logo />
                </div>
              </div>

              <div className="row row-same-height">
                <div className="col-xs-3 force-column-height">
                  <div className="text-center">
                    <Instructions />
                  </div>
                  <Settings />
                </div>

                <div className="col-xs-6 force-column-height">
                  <GameText id="view-box" />
                  <UserInput id="text-input" defaultValue="" />
                  <div className="text-center">
                    <UserStats />
                  </div>
                  <div className="text-center">
                    <SayInput />
                    <SpellCurrent />
                    <ToggleKeyboard />
                    <StartButton />
                  </div>
                  <KeyboardCollapse />
                </div>

                <div className="col-xs-3 force-column-height">
                  <Leaderboard />
                </div>

              </div>
            </div>
          </div>

          <AboutModal />
          <HelpModal />
          <SubmitScoreModal />

        </div>
      </div>
    );
  }
}

export default Main;

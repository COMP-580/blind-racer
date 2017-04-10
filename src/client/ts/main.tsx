/**
 * Main entry point for bootstrapping
 */

/**
 * Load libraries
 */

// let $ = require("../libraries/jquery/dist/jquery");
// (global as any).jQuery = $;
// (global as any).$ = $;
// require("../libraries/bootstrap-sass/assets/javascripts/bootstrap");

/**
 * Bootstrap files
 */

// Actions
import GameActions from "./actions/GameActions";
import LeaderboardActions from "./actions/LeaderboardActions";
import ModalActions from "./actions/ModalActions";
import SettingsActions from "./actions/SettingsActions";
import SoundActions from "./actions/SoundActions";
import SpeechActions from "./actions/SpeechActions";
import TimingActions from "./actions/TimingActions";
import TypingActions from  "./actions/TypingActions";

// Stores
import "./stores/GameTextStore";
import "./stores/ModalStore";
import "./stores/SettingsStore";
import "./stores/SoundStore";
import "./stores/SpeechStore";
import "./stores/StatStore";
import "./stores/TimerStore";
import "./stores/TypingModestore";
import "./stores/UserInputStore";

/**
 * Load the main react component
 */
import Main from "./components/Main";
import * as React from "react";
import * as ReactDOM from "react-dom";

ReactDOM.render(
    <Main />,
    document.getElementById("main-frame")
);

/**
 * Initialization
 */

// TODO: read cookies and set the correct settings
import TypingMode from "./enums/TypingMode";
SettingsActions.changeTypingMode(TypingMode.STANDARD);
SoundActions.loadSound({name: "inception-horn", path: "assets/sounds/inception-horn.mp3"});
SoundActions.loadSound({name: "ding", path: "assets/sounds/ding.mp3", volume: 0.1});
SoundActions.loadSound({name: "party-horn", path: "assets/sounds/party-horn.mp3"});
SoundActions.playSound("ding");
TimingActions.startTyping();

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
import TypingActions from  "./actions/TypingActions";
import SoundActions from "./actions/SoundActions";
import "./stores/BoxStore";
import "./stores/TypingModeStore"
import "./stores/InputTextStore"
import "./stores/SpeechStore";
import "./stores/SoundStore";


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
TypingActions.changeMode(0);
SoundActions.loadSound({name: "inception-horn", path: "assets/sounds/inception-horn.mp3"});
SoundActions.loadSound({name: "ding", path: "assets/sounds/ding.mp3", volume: 0.1});
SoundActions.loadSound({name: "party-horn", path: "assets/sounds/party-horn.mp3"});
SoundActions.playSound("ding");
TypingActions.startTyping();

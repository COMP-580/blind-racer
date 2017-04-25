/**
 * main
 *
 * Main entry point for bootstrapping and loading the app.
 */

/**
 * Load libraries
 */

// let $ = require("../libraries/jquery/dist/jquery");
let $ = require("jquery");
(global as any).jQuery = $;
(global as any).$ = $;
require("../libraries/bootstrap-sass/assets/javascripts/bootstrap.min");
require("../libraries/seiyria-bootstrap-slider/dist/bootstrap-slider.min");
import * as Cookies from "js-cookie";

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
import VirtualKeyboardActions from "./actions/VirtualKeyboardActions";

// Stores
import "./stores/GameButtonStore";
import "./stores/GameTextStore";
import "./stores/LeaderboardStore";
import "./stores/ModalStore";
import "./stores/SettingsStore";
import "./stores/SoundStore";
import "./stores/SpeechStore";
import "./stores/StatStore";
import "./stores/TimerStore";
import "./stores/TypingModeStore";
import "./stores/UserInputStore";
import "./stores/VirtualKeyboardStore";

// Enums
import { ColorTheme, toColorTheme } from "./enums/ColorTheme";
import { Modal } from "./enums/Modal";
import { TypingMode, toTypingMode } from "./enums/TypingMode";

// Util
import "./util/RestClient";

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
$(document).ready(() => {

  // Fetch leaderboard
  LeaderboardActions.refreshLeaderboard();

  // Initialize so the next calls are faster
  SpeechActions.sayText("");

  // Set defaults based off cookie values
  let colorTheme = toColorTheme(parseInt(Cookies.get("colorTheme"))) || ColorTheme.STANDARD;
  let typingMode = toTypingMode(parseInt(Cookies.get("typingMode"))) || TypingMode.STANDARD;
  let masterVolume = parseFloat(Cookies.get("masterVolume")) || 0.5;
  let soundVolume = parseFloat(Cookies.get("soundVolume")) || 0.5;
  let speechVolume = parseFloat(Cookies.get("speechVolume")) || 0.5;
  let checkPunctuation = Cookies.get("checkPunctuation") === "true" || false;

  SettingsActions.changeColorTheme(colorTheme);
  SettingsActions.changeTypingMode(typingMode);
  SettingsActions.changeMasterVolume(masterVolume);
  SettingsActions.changeSoundVolume(soundVolume);
  SettingsActions.changeSpeechVolume(speechVolume);
  SettingsActions.changeCheckPunctuation(checkPunctuation);

  // Load assets
  SoundActions.loadSound({name: "inception-horn", path: "assets/sounds/inception-horn.mp3", volume: 1.0});
  SoundActions.loadSound({name: "ding",           path: "assets/sounds/ding.mp3",           volume: 0.1});
  SoundActions.loadSound({name: "party-horn",     path: "assets/sounds/party-horn.mp3",     volume: 0.5});

  // Attach handlers
  require("./page-handlers");

  // // Test
  // SoundActions.playSound("ding");
  // TimingActions.startTyping();
  // SpeechActions.spellWord("daniel");
});

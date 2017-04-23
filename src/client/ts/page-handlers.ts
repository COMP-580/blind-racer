/**
 * page-handlers
 *
 * Adds certain event handlers to the window.
 */

import GameActions from "./actions/GameActions";
import TimingActions from "./actions/TimingActions";

// Hit shift + enter to start a game
$(document).on("keypress", (e: any) => {
  let key = e.which;
  let shifted = e.shiftKey;
  if (shifted && key === 13) {
    GameActions.startGame();
    TimingActions.startTyping();
  }
});

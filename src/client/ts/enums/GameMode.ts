/**
 * GameMode
 *
 * Different game modes. Used for changing the game mode.
 */

const enum GameMode {
  BEGINNER,
  INTERMEDIATE,
}

function toGameMode(value: number): GameMode {
  let typingMode = GameMode.INTERMEDIATE;
  if (value === 0) {
    typingMode = GameMode.BEGINNER;
  } else if (value === 1) {
    typingMode = GameMode.INTERMEDIATE;
  }
  return typingMode;
}

export { GameMode, toGameMode };

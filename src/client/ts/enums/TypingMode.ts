/**
 * TypingMode
 *
 * Different typing modes. Used for changing the typing mode.
 */

const enum TypingMode {
  STANDARD,
  REPEAT,
}

function toTypingMode(value: number): TypingMode {
  let typingMode = TypingMode.STANDARD;
  if (value === 0) {
    typingMode = TypingMode.STANDARD;
  } else if (value === 1) {
    typingMode = TypingMode.REPEAT;
  }
  return typingMode;
}

export { TypingMode, toTypingMode };

/**
 * ColorTheme
 *
 * Different color themes. Used for changing the color theme.
 */

const enum ColorTheme {
  STANDARD,
}

function toColorTheme(value: number): ColorTheme {
  let colorTheme = ColorTheme.STANDARD;
  if (value === 0) {
    colorTheme = ColorTheme.STANDARD;
  }
  return colorTheme;
}

export { ColorTheme, toColorTheme };

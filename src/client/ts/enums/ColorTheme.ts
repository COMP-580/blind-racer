/**
 * ColorTheme
 *
 * Different color themes.
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

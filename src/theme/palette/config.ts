export const PALETTE_CONFIG = Object.freeze({
  saturation: {
    minThreshold: 12,
    min: 7,
  },
});

export interface ColorScheme {
  huePrimary: number;
  hueError: number;
  hueSuccess: number;
  hueWarning: number;
  saturationMain: number;
  lightnessMain: number;
  lightnessDark: number;
}

// https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl#h
export const GALLO_CONFIG: ColorScheme = Object.freeze({
  huePrimary: 227,
  hueError: 352,
  hueSuccess: 114,
  hueWarning: 45,
  saturationMain: 65,
  lightnessMain: 52,
  lightnessDark: 42,
});

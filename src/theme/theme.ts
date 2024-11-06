import { Theme } from '@mui/material';
import { createCustomTheme } from './theme.util';
import { ColorScheme } from './palette/config';
import { getLightBasePalette } from './palette/palette.light';
import { generatePalette } from './palette/palette';
import { getDarkBasePalette } from './palette/palette.dark';

export type ThemeOptions = 'dark' | 'light';

export const getTheme = (isDarkMode: boolean, colorSchema?: ColorScheme): Theme => {
  const palette = generatePalette(colorSchema);
  const adjustedPalette = isDarkMode ? getDarkBasePalette(palette) : getLightBasePalette(palette);
  return createCustomTheme(adjustedPalette, palette);
};

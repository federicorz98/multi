import { Theme } from '@mui/material';
import { createCustomTheme } from './theme.util';
import { lightBasePalette } from './palette/palette.light';
import { darkBasePalette } from './palette/palette.dark';

const defaultTheme = createCustomTheme(lightBasePalette);

const darkTheme = createCustomTheme(darkBasePalette);

export type ThemeOptions = 'dark' | 'light';

export const getTheme = (mode: ThemeOptions): Theme => {
  return mode === 'dark' ? darkTheme : defaultTheme;
};

export const getDarkTheme = (): Theme => {
  return darkTheme;
};

export const getDefaultTheme = (): Theme => {
  return defaultTheme;
};

export { defaultTheme, darkTheme };
export default defaultTheme;

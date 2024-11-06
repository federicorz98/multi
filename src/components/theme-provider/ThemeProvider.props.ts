import { Theme } from '@mui/material';
import { ThemeProviderProps as MuiThemeProviderProps } from '@mui/material/styles/ThemeProvider';
import { ColorScheme } from '@theme/palette/config';

/**
 * Define props for MultiThemeProvider component
 * @extends MuiThemeProviderProps
 * */
export type MultiThemeProviderProps = {
  colorSchema?: ColorScheme;
  theme?: Partial<Theme> | ((outerTheme: Theme) => Theme);
} & Omit<MuiThemeProviderProps, 'theme'>;

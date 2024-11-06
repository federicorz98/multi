import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import useMultiTheme from '@hooks/useMultiTheme';
import { MultiThemeProviderProps } from './ThemeProvider.props';
import { GALLO_CONFIG } from '@theme/palette/config';
import { useState } from 'react';
import { CssBaseline, useMediaQuery } from '@mui/material';
import { ThemeOptions } from '@theme/theme';
import { DarkModeContext } from './DarkModeContext';

// this component is required to use `useMultiTheme` hook inside the context
const ThemeProvider = ({ children, colorSchema = GALLO_CONFIG, ...props }: MultiThemeProviderProps) => {
  const { getCurrentTheme } = useMultiTheme();

  return (
    <MuiThemeProvider theme={getCurrentTheme(colorSchema)} {...props}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

/**
 * @see {@link https://mui.com/material-ui/customization/theming/#theme-provider}
 */
const MultiThemeProvider = ({ children, colorSchema = GALLO_CONFIG, ...props }: MultiThemeProviderProps) => {
  const systemTheme = useMediaQuery('(prefers-color-scheme: dark)');
  const storedTheme = localStorage.getItem('appTheme') as ThemeOptions | null;
  const isDefaultDark = storedTheme ? storedTheme === 'dark' : systemTheme;

  const [isDarkMode, setDarkMode] = useState(isDefaultDark);

  return (
    <DarkModeContext.Provider
      value={{
        isDarkMode,
        setDarkMode,
      }}
    >
      <ThemeProvider colorSchema={colorSchema} {...props}>
        {children}
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
};

export default MultiThemeProvider;

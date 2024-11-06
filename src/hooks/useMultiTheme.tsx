import { useContext } from 'react';
import { getTheme, ThemeOptions } from '@theme/theme';
import { ColorScheme } from '@theme/palette/config';
import { DarkModeContext } from '@components/theme-provider/DarkModeContext';

function useMultiTheme() {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw new Error('Missing DarkModeContext, check if the MultiThemeProvider is used to wrap the App.');
  }

  const { isDarkMode, setDarkMode } = context;

  const changeThemeMode = (mode: ThemeOptions) => {
    const isDarkMode = mode === 'dark';
    setDarkMode(isDarkMode);
    localStorage.setItem('appTheme', isDarkMode ? 'dark' : 'light');
  };

  const toggleThemeMode = () => {
    changeThemeMode(isDarkMode ? 'light' : 'dark');
  };

  const getCurrentTheme = (colorSchema: ColorScheme) => {
    return getTheme(isDarkMode ?? false, colorSchema);
  };

  return {
    getCurrentTheme,
    changeThemeMode,
    toggleThemeMode,
    isDarkMode,
  };
}

export default useMultiTheme;

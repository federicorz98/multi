import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { getTheme, ThemeOptions } from '@theme/theme';
import { ColorScheme } from '@theme/palette/config';

function useCustomTheme() {
  const systemTheme = useMediaQuery('(prefers-color-scheme: dark)');
  const isDefaultDark = localStorage.getItem('appTheme') ? localStorage.getItem('appTheme') === 'dark' : systemTheme;
  const [darkMode, setDarkMode] = useState<boolean>(isDefaultDark);

  const appTheme = localStorage.getItem('appTheme');

  if (!appTheme) {
    localStorage.setItem('appTheme', darkMode ? 'dark' : 'light');
  }

  // TODO: Implement local storage hook. https://usehooks-ts.com/react-hook/use-local-storage
  window.addEventListener('appTheme', () => {
    setDarkMode(localStorage.getItem('appTheme') === 'dark');
  });

  const changeThemeMode = (mode: ThemeOptions) => {
    const isDarkMode = mode === 'dark';
    setDarkMode(isDarkMode);
    localStorage.setItem('appTheme', isDarkMode ? 'dark' : 'light');
  };

  return {
    getTheme: (colorSchema?: ColorScheme) => getTheme(darkMode, colorSchema),
    isDarkMode: darkMode,
    changeThemeMode,
  };
}

export default useCustomTheme;

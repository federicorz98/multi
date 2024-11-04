import { useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { getDarkTheme, getDefaultTheme } from '@theme/theme';

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

  return { getTheme: () => (darkMode ? getDarkTheme() : getDefaultTheme()), isDarkMode: darkMode };
}

export default useCustomTheme;

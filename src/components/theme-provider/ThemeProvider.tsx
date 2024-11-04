import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import useCustomTheme from '@hooks/useCustomTheme';
import { ThemeProviderProps } from '@emotion/react';

const MultiThemeProvider = ({ children, theme, ...props }: ThemeProviderProps) => {
  const { getTheme } = useCustomTheme();

  return (
    <MuiThemeProvider theme={getTheme()} {...props}>
      {children}
    </MuiThemeProvider>
  );
};

export default MultiThemeProvider;

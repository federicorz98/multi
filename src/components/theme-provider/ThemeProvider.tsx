import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import useMultiTheme from '@hooks/useMultiTheme';
import { MultiThemeProviderProps } from './ThemeProvider.props';
import { GALLO_CONFIG } from '@theme/palette/config';
import { useMemo } from 'react';

/**
 * @see {@link https://mui.com/material-ui/customization/theming/#theme-provider}
 */
const MultiThemeProvider = ({ children, colorSchema = GALLO_CONFIG, theme, ...props }: MultiThemeProviderProps) => {
  const { getTheme, isDarkMode } = useMultiTheme();

  const configuredTheme = useMemo(() => {
    if (theme) {
      return theme;
    }

    return getTheme(colorSchema);
  }, [colorSchema, theme, isDarkMode]);

  return (
    <MuiThemeProvider theme={configuredTheme} {...props}>
      {children}
    </MuiThemeProvider>
  );
};

export default MultiThemeProvider;

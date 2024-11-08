import { Box, useMediaQuery, useTheme } from '@mui/material';

const Header = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();

  return (
    <Box
      bgcolor="surface.inverted"
      position="sticky"
      top={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      minWidth={1200}
      zIndex={4}
    >
      <Box
        component="header"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        height={64}
        minWidth={1136}
        maxWidth={1728}
        zIndex={2}
        flex={1}
        sx={{
          boxShadow: '0 2px 4px rgba(0, 0, 0, 0.025)',
          px: useMediaQuery(theme.breakpoints.between(1535, 1736)) ? '32px' : { xs: 6, sm: 6, md: 6, lg: 6, xl: 4 },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Header;

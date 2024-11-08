import { Box, BoxProps, useTheme } from '@mui/material';
import { styled } from '@mui/material';
import { Typography } from '@mui/material';
import { FooterProps } from './Footer.props';

/**
 * Styled Footer
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=635-6828&t=AtV1GPEnzD187re8-4} Figma Component
 * @since 1.0.0
 *  */
function Footer({ children, productName, version }: Partial<FooterProps>) {
  const { palette } = useTheme();

  return (
    <footer>
      <StyledFooter>
        {children ? (
          children
        ) : (
          <Typography variant="caption" color={palette.text.onAction}>
            Copyright ©
            <strong>
              Home Broker {productName} {new Date().getFullYear()}.
            </strong>
            Todos los derechos reservados. - Versión {version ?? '1.0.0'}
          </Typography>
        )}
      </StyledFooter>
    </footer>
  );
}

const StyledFooter = styled(Box)<BoxProps>(({ theme }) => ({
  minWidth: 1200,
  width: '100%',
  display: 'grid',
  placeItems: 'center',
  backgroundColor: theme.palette.surface.footer,
  padding: `${theme.spacing(5)} ${theme.spacing(0)}`,
}));

export default Footer;

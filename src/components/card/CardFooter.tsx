import Box from '@mui/material/Box';
import { styled } from '@mui/material';

/**
 * Styled Card footer
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=7303-50715&t=S5OZL4o8KrAZJWhm-4 } Figma Component
 * @since 1.0.0
 *  */
const CardFooter = styled(Box)(({ theme }) => ({
  color: theme.palette.text.action,
  backgroundColor: theme.palette.surface.info.main,
  padding: '0.5rem 1rem',
  textAlign: 'center',
}));

export default CardFooter;

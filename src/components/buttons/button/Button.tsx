import Spinner from '@components/spinner/Spinner';
import { Button as MuiButton, Box } from '@mui/material';
import { ButtonProps } from './Button.props';

/**
 * Styled MUI Button with custom styling
 * @see {@link https://mui.com/material-ui/react-button} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=304-16407&t=jsxu5z5TZeEE8QZm-4} Figma Component
 * @since 1.0.0
 *  */
const Button = ({ label, iconLeft, iconRight, disabled, loadingText, isLoading = false, ...rest }: ButtonProps) => {
  return (
    <MuiButton {...rest} disabled={isLoading || disabled}>
      {isLoading ? (
        <Box paddingRight={3}>
          <Spinner size={24} />
        </Box>
      ) : (
        iconLeft
      )}
      {isLoading ? (loadingText ?? label) : label}
      {iconRight}
    </MuiButton>
  );
};

export default Button;

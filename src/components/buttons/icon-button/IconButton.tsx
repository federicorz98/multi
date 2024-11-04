import { IconButton as MuiIconButton, styled } from '@mui/material';
import { IconButtonProps, Size } from './IconButton.props';

const sizes: Record<Size, { svg: string }> = {
  xxs: {
    svg: '18px',
  },
  xs: {
    svg: '24px',
  },
  s: {
    svg: '32px',
  },
  m: {
    svg: '36px',
  },
  l: {
    svg: '42px',
  },
  xl: {
    svg: '48px',
  },
};

const Classes: Partial<Record<Size, string>> = {
  xs: 'MuiIconButton-sizeExtraSmall',
  xl: 'MuiIconButton-sizeXLarge',
};

/**
 * Styled MUI Icon Button with custom styling
 * @see {@link https://mui.com/material-ui/api/icon-button} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=887-3418&t=jsxu5z5TZeEE8QZm-4} Figma Component
 * @since 1.0.0
 *  */
const IconButton = ({ children, size = 's', ...props }: IconButtonProps) => {
  return (
    <StyledMuiIconButton
      className={Classes[size]}
      sx={{
        '& svg': {
          fontSize: sizes[size].svg,
          color: 'icon.action.main',
        },
      }}
      {...props}
    >
      {children}
    </StyledMuiIconButton>
  );
};

export default IconButton;

const StyledMuiIconButton = styled(MuiIconButton)(({ theme }) => ({
  transition: 'none',
  '&:hover': {
    backgroundColor: theme.palette.surface.onAction.secondary,
    borderRadius: '8px',
  },
  '&.MuiIconButton-sizeMedium, &.MuiIconButton-sizeLarge': {
    padding: '5px',
  },
  '&.MuiIconButton-sizeXLarge': {
    padding: '8px',
  },
  '&.MuiIconButton-sizeExtraSmall': {
    padding: '3px',
    borderRadius: '4px',
  },
}));

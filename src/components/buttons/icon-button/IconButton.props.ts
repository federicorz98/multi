import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

export type Size = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl';

/**
 * Define props for IconButton component
 * @extends MuiIconButtonProps
 * @see {@link https://mui.com/material-ui/api/icon-button/#props}
 * */
export type IconButtonProps = {
  size?: Size;
} & Omit<MuiIconButtonProps, 'size'>;

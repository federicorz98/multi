import { ButtonProps as MuiIconButtonProps } from '@mui/material';
import { IconProps } from '@phosphor-icons/react';

/**
 * Define props for IconButton component
 * @extends MuiIconButtonProps
 * @see {@link https://mui.com/material-ui/api/icon-button/#props}
 * */
export type LinkButtonProps = {
  toolTipText: string;
  url: string;
  newTab?: boolean;
  iconProps?: IconProps;
} & MuiIconButtonProps;

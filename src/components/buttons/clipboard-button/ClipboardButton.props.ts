import { ButtonProps as MuiButtonProps } from '@mui/material';
import { IconProps } from '@phosphor-icons/react';

/**
 * Define props for IconButton component
 * @extends MuiIconButtonProps
 * @see {@link https://mui.com/material-ui/api/icon-button/#props}
 * */
export type ClipboardButtonProps = {
  copyText: string;
  toolTipText: string;
  toolTipCopiedText?: string;
  iconProps?: IconProps;
} & MuiButtonProps;

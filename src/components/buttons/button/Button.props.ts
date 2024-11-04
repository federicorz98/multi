import { ButtonProps as MuiButtonProps } from '@mui/material';
import { IconProps } from '@phosphor-icons/react';
import { ReactElement } from 'react';

/**
 * Define props for CustomButton component
 * @extends MuiButtonProps
 * @see {@link https://mui.com/material-ui/api/button/#props}
 * */
export type ButtonProps = {
  label: string;
  isLoading?: boolean;
  loadingText?: string;
  iconLeft?: ReactElement<IconProps>;
  iconRight?: ReactElement<IconProps>;
} & MuiButtonProps;

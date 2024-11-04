import { IconButtonProps as MuiIconButtonProps } from '@mui/material';

export type Size = 's' | 'm' | 'l';

/**
 * Define props for FavoriteButton component
 * @extends MuiIconButtonProps
 * */
export type FavoriteButtonProps = {
  isFavorite?: boolean;
  isLoading?: boolean;
  size?: Size;
  grid?: boolean;
} & Omit<MuiIconButtonProps, 'size'>;

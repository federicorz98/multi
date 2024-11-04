import { ToggleButtonGroupProps as MuiToggleButtonGroupProps } from '@mui/material';
import { Options, RichOptions } from '@models/options.model';

export type Size = 'xs' | 's' | 'm' | 'l';

/**
 * Define props for ToggleButton component
 * */
export type ToggleButtonProps<T extends string | number> = {
  onSelect: (val: T) => void;
  options: Options<T> | RichOptions<T>;
  defaultValue: T;
  size?: Size;
  fullWidth?: boolean;
  setValue?: T;
  hideSelection?: boolean;
} & Omit<MuiToggleButtonGroupProps, 'size'>;

import { TextFieldProps as MuiTextFieldProps } from '@mui/material';

/**
 * Define props for NumberInput component
 * @extends MuiTextFieldProps
 * @see {@link https://mui.com/material-ui/api/text-field/#props} MUI Documentation
 * */
export type NumberInputProps = {
  error?: string | boolean;
  defaultValue?: number;
  decimals?: number;
  allowNegative?: boolean;
  prefix?: React.ReactNode | string;
  suffix?: React.ReactNode | string;
  maxLength?: number;
  thousandSeparator?: string | boolean;
  allowLeadingZeros?: boolean;
  showStatusIcon?: boolean;
  onPlus?: () => void;
  onMinus?: () => void;
} & Omit<MuiTextFieldProps, 'error'>;

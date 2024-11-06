import { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import { Currency } from '@models/currency.model';

/**
 * Define props for CurrencyInput component
 * @extends MuiTextFieldProps
 * @see {@link https://mui.com/material-ui/api/text-field/#props} MUI Documentation
 * */
export type CurrencyInputProps = {
  currency?: Currency;
  error?: string | boolean;
  defaultValue?: number;
  decimals?: number;
  handleChangeError?: (error: boolean) => void;
} & Omit<MuiTextFieldProps, 'error'>;

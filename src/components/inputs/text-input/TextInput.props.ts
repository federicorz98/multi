import { TextFieldProps as MuiTextFieldProps } from '@mui/material/TextField';

/**
 * Define props for TextInput component
 * @extends MuiTextFieldProps
 * @see {@link https://mui.com/material-ui/api/text-field/#props} MUI Documentation
 * */
export type TextInputProps = {
  error?: string | boolean;
  disabled?: boolean;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement | HTMLInputElement>;
} & Omit<MuiTextFieldProps, 'error' | 'onChange'>;

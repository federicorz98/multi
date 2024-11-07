import { SelectInputOption } from '@models/options.model';
import { AutocompleteProps as MuiAutocompleteProps } from '@mui/material';

/**
 * Define props for Select component
 * @extends MuiAutocompleteProps
 * @see {@link https://mui.com/material-ui/api/autocomplete/#props} MUI Documentation
 * */
export type SelectProps<T extends string | number> = {
  options: SelectInputOption<T>[];
  label?: string;
  itemHeight?: string | number;
  error?: boolean;
  disableClearable?: boolean;
} & Omit<MuiAutocompleteProps<SelectInputOption<T>, boolean, boolean, boolean>, 'renderInput' | 'disableClearable' | 'options'>;

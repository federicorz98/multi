import { RadioProps as MuiRadioProps } from '@mui/material';

/**
 * Define props for RadioButton component
 * @extends MuiRadioProps
 * @see {@link https://mui.com/material-ui/api/radio/#props}
 * */
export type RadioButtonProps = {
  label?: React.ReactNode;
  centeredButton?: boolean;
} & MuiRadioProps;

import { ButtonProps as MuiButtonProps } from '@mui/material';

/**
 * Define props for SplitButton component
 * @extends MuiButtonProps
 * @see {@link https://mui.com/material-ui/api/button/#props}
 * */
export type SplitButtonProps = {
  label: string;
  itemsList: { label: string; onClick: () => void }[];
} & MuiButtonProps;

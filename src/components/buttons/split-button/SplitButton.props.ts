import { ButtonProps as MuiButtonProps } from '@mui/material';

/**
 * Define props for SplitButton component
 * @extends MuiButtonProps
 * @see {@link https://mui.com/material-ui/api/button/#props}
 * */
export type SplitButtonProps = {
  label: React.ReactNode;
  itemsList: { label: string; onClick: () => void }[];
} & MuiButtonProps;

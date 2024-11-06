import Tooltip from '@components/tooltip/Tooltip';
import { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { ReactElement } from 'react';

/**
 * Define props for Checkbox component
 * @extends MuiCheckboxProps
 * @see {@link https://mui.com/material-ui/api/checkbox/#props} MUI Documentation
 * */
export type CheckboxProps = {
  label?: React.ReactNode;
  tooltip?: ReactElement<typeof Tooltip>;
} & MuiCheckboxProps;

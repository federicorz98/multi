import { AlertProps as MuiAlertProps, SxProps } from '@mui/material';

/**
 * Define props for Alert component
 * @extends MuiAlertProps
 * @see {@link https://mui.com/material-ui/api/alert/#props} MUI Documentation
 * */
export type AlertProps = {
  title?: React.ReactNode;
  body: React.ReactNode;
  footer?: {
    label: string;
    onClick: () => void;
    sx?: SxProps;
  };
} & MuiAlertProps;

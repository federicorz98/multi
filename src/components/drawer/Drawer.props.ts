import { DrawerProps as MuiDrawerProps } from '@mui/material';

/**
 * Define props for Drawer component
 * @extends MuiDrawerProps
 * @see {@link https://mui.com/material-ui/api/drawer/#props} MUI Documentation
 * */
export type DrawerProps = {
  drawerWidth?: number;
} & MuiDrawerProps;

import Stack from '@mui/material/Box';
import { Drawer as MuiDrawer } from '@mui/material';
import { styled } from '@mui/material';
import { DrawerProps } from './Drawer.props';

/**
 * Styled MUI Drawer
 * @see {@link https://mui.com/material-ui/react-drawer} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=11926-82404&t=5zqEnLpMqDCZqqRH-4} Figma Component
 * @since 1.0.0
 *  */
const Drawer = ({ drawerWidth = 480, children, ...props }: DrawerProps) => {
  return (
    <StyledDrawer {...props}>
      <Stack
        sx={{ backgroundColor: 'surface.container.level1' }}
        width={drawerWidth}
        role="presentation"
        height="100%"
        display="flex"
        flexDirection="column"
      >
        {children}
      </Stack>
    </StyledDrawer>
  );
};

const StyledDrawer = styled(MuiDrawer)(({ theme }) => ({
  '& .MuiSwipeableDrawer-paper': {
    boxShadow: '-10px 0px 20px -4px rgba(29, 51, 135, 0.12), -4px 0px 4px 0px rgba(29, 52, 135, 0.20)',
  },
  '& .MuiBackdrop-root': {
    backgroundColor: `${theme.palette.primary.darker}35`,
  },
}));

export default Drawer;

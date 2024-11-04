import { Box, IconButton, IconButtonProps } from '@mui/material';

/**
 * Styled IconButton for data grids
 * @since 1.0.0
 *  */
const IconButtonDataGrid = (props: IconButtonProps) => {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: 2,
        padding: 2,
        '&:hover': {
          backgroundColor: props.disabled ? 'inherit' : theme.palette.surface.onAction.secondary,
        },
      })}
    >
      <IconButton {...props} />
    </Box>
  );
};

export default IconButtonDataGrid;

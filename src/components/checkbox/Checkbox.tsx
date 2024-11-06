import { Box, Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';
import { CheckboxProps } from './Checkbox.props';

/**
 * Styled MUI Checkbox with custom styling
 * @see {@link https://mui.com/material-ui/react-checkbox/} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=176-3437&t=vn3jt8asu9tEdG4o-4} Figma Component
 * @since 1.0.0
 *  */
const Checkbox = ({ label, checked, onChange, size, tooltip, ...props }: CheckboxProps) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      sx={{
        flexShrink: 0,
      }}
    >
      <FormControlLabel
        label={label}
        sx={(theme) => ({
          gap: '5px',
          marginRight: '5px',
          marginLeft: 0,
          '& .MuiCheckbox-root': { p: 0, '& .MuiSvgIcon-root': { color: theme.palette.icon.default.main } },
          '& .Mui-disabled': { '& .MuiSvgIcon-root': { color: theme.palette.action.disabled } },
          '& .Mui-checked': { '& .MuiSvgIcon-root': { color: theme.palette.icon.action.main } },
          '& .MuiSvgIcon-root': { fontSize: size === 'small' ? 16 : 22 },
          '& .MuiTypography-labelSm': { color: theme.palette.text.default },
          pointerEvents: 'none',
        })}
        slotProps={{ typography: { variant: 'labelSm' } }}
        control={
          <MuiCheckbox size={size ?? 'small'} inputProps={{ 'aria-label': 'controlled' }} sx={{ pointerEvents: 'auto' }} {...props} />
        }
      />
      {tooltip}
    </Box>
  );
};

export default Checkbox;

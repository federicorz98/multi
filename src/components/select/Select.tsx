import { MenuItem, styled, FormControl, Paper, Autocomplete, useTheme } from '@mui/material';
import { CaretDown } from '@phosphor-icons/react';
import { SelectProps } from './Select.props';
import TextInput from '@components/inputs/text-input/TextInput';

/**
 * Styled Select
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=10499-44493&t=S5OZL4o8KrAZJWhm-4} Figma Component
 * @since 1.0.0
 *  */
const Select = <T extends string | number>({
  options,
  disabled,
  label,
  multiple,
  error,
  itemHeight = 40,
  disableClearable = true,
  ...rest
}: SelectProps<T>) => {
  const theme = useTheme();

  return (
    <StyledFormControl disabled={disabled} fullWidth error={error} size="small">
      <Autocomplete
        disabled={disabled}
        noOptionsText=""
        multiple={multiple}
        PaperComponent={({ children }) => {
          return (
            <Paper
              elevation={8}
              sx={{
                color: theme.palette.text.default,
                backgroundColor: theme.palette.surface.container.level1,
                '& .MuiAutocomplete-listbox': {
                  borderRadius: '4px',
                  padding: 0,
                },
              }}
            >
              {children}
            </Paper>
          );
        }}
        disablePortal
        isOptionEqualToValue={(option, value) => {
          return option.value === value.value;
        }}
        disableClearable={disableClearable}
        size="small"
        popupIcon={<CaretDown size={16} color={theme.palette.icon.default.main} />}
        options={options}
        renderInput={(params) => <TextInput {...params} label={label} />}
        renderOption={(props, option) => (
          <MenuItem
            {...props}
            key={option.key}
            value={option.value}
            sx={{
              padding: '0 12px',
              height: itemHeight,
              backgroundColor: theme.palette.surface.container.level1,
              gap: '12px',
              ...theme.typography.body2,
              ':hover': {
                backgroundColor: theme.palette.surface.hover,
              },
              borderBottom: `1px solid ${theme.palette.border.divider}`,
            }}
          >
            {option.label}
          </MenuItem>
        )}
        {...rest}
      />
    </StyledFormControl>
  );
};

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  '& .MuiFormControl-root': {
    ...theme.typography.captionMedium,
  },
  '& label, & fieldset': {
    ...theme.typography.body1,
    borderColor: theme.palette.border.default,
    color: theme.palette.text.default,
  },
  '& label.Mui-focused': {
    color: theme.palette.text.action,
  },
  '.MuiInputBase-root:hover fieldset': {
    borderColor: theme.palette.border.action,
  },
  '&:hover label': {
    color: theme.palette.text.action,
  },

  '& .MuiOutlinedInput-root': {
    borderRadius: 8,
    border: `1px ${theme.palette.border.action}`,
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.border.error,
    },
    '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.text.disabled,
    },
    '&.Mui-error .MuiFormLabel-root': {
      color: theme.palette.text.error.main,
    },
    '& .MuiOutlinedInput-input': {
      ...theme.typography.body1,
      color: theme.palette.text.body,
      '&::placeholder': {
        color: theme.palette.text.body,
      },
    },
    '&.Mui-focused fieldset': {
      borderWidth: 1,
      borderColor: theme.palette.border.action,
    },
    '& .MuiAutocomplete-inputRoot': {
      alignContent: 'center',
    },
    '& .MuiAutocomplete-endAdornment': {
      right: '14px',
    },
  },
  '& .MuiFormLabel-root.Mui-disabled, & .Mui-disabled': {
    color: theme.palette.text.disabled,
  },
  '& .MuiFormLabel-root.Mui-error': {
    color: theme.palette.text.error.main,
  },
  '& .MuiInputBase-input': {
    cursor: 'pointer',
  },
  '& .MuiInputBase-input.Mui-disabled': {
    cursor: 'default',
    color: theme.palette.text.disabled,
  },
  '& .MuiInputBase-root': {
    cursor: 'pointer',
    '& .MuiInputAdornment-root': {
      color: theme.palette.text.body,
    },
  },
  '& .MuiInputBase-root.Mui-disabled': {
    '& .MuiInputAdornment-root': {
      color: theme.palette.text.disabled,
    },
  },
}));

export default Select;

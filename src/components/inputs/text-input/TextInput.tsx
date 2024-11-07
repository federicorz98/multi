import TextField from '@mui/material/TextField';
import { styled } from '@mui/material';
import { TextInputProps } from './TextInput.props';

/**
 * Styled MUI Text input with custom styling
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=8310-33935&t=vn3jt8asu9tEdG4o-4} Figma Component
 * @since 1.0.0
 *  */
export function TextInput({ error, helperText, type, disabled = false, value, onChange, ...rest }: TextInputProps) {
  return (
    <StyledTextInput
      size="small"
      autoComplete="off"
      type={type ?? 'text'}
      error={typeof error === 'boolean' ? error : error !== undefined}
      helperText={helperText && !error ? helperText : typeof error === 'string' ? error : undefined}
      disabled={disabled}
      value={value ?? ''}
      onChange={onChange}
      {...rest}
    />
  );
}

const StyledTextInput = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    ...theme.typography.body1,
    height: 40,
    gap: theme.spacing(3),
    alignItems: 'center',
    borderRadius: theme.spacing(3),
    borderColor: theme.palette.border.default,
    color: theme.palette.text.body,
    '& .MuiInputAdornment-root .MuiTypography-root': {
      color: theme.palette.text.default,
    },
    '&.Mui-disabled': {
      '& .MuiInputAdornment-root .MuiTypography-root': {
        color: theme.palette.text.disabled,
      },
    },
    '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.border.default,
      borderWidth: '1px',
    },
    '&:hover.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.border.action,
    },
    '&:hover.MuiOutlinedInput-root, &.MuiOutlinedInput-root': {
      '&.Mui-focused': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: theme.palette.border.action,
          borderWidth: '2px',
        },
        '& ::placeholder': {
          color: 'transparent',
        },
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline, &.Mui-disabled .MuiBox-root': {
        borderColor: theme.palette.border.disabled,
        color: theme.palette.text.disabled,
      },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.border.error,
      },
    },
  },
  '& .MuiFormHelperText-root': {
    color: theme.palette.text.default,
    '&.Mui-error': {
      color: theme.palette.text.error.main,
    },
  },
  '& .MuiBox-root': {
    color: theme.palette.icon.default.main,
  },
  '&:hover': {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.light,
    },
  },
  '& .MuiFormLabel-root': {
    ...theme.typography.body1,
    color: theme.palette.text.default,
    paddingRight: 2,
    '&.Mui-focused': {
      color: theme.palette.text.action,
    },
    '&.Mui-error': {
      color: theme.palette.text.error.main,
    },
    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    fontSize: theme.typography.body1.fontSize,
  },
}));

export default TextInput;

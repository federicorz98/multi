import * as React from 'react';
import { Stack, TextField, Typography, styled } from '@mui/material';
import { OtpInputProps } from './OtpInput.props';

/**
 * Styled OTP input
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=8056-34786&t=vn3jt8asu9tEdG4o-4} Figma Component
 * @since 1.0.0
 * */
export default function OtpInput({ separator, length, value, error, onChange }: OtpInputProps) {
  const inputRefs = React.useRef<HTMLInputElement[]>(new Array(length).fill(null));

  const focusInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];
    if (targetInput) {
      targetInput.focus();
    }
  };

  const selectInput = (targetIndex: number) => {
    const targetInput = inputRefs.current[targetIndex];
    if (targetInput) {
      targetInput.select();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, currentIndex: number) => {
    switch (event.key) {
      case 'ArrowUp':
      case 'ArrowDown':
      case ' ':
        event.preventDefault();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        break;
      case 'ArrowRight':
        event.preventDefault();
        if (currentIndex < length - 1) {
          focusInput(currentIndex + 1);
          selectInput(currentIndex + 1);
        }
        break;
      case 'Delete':
        event.preventDefault();
        onChange((prevOtp) => {
          const otpArray = prevOtp.split('');
          otpArray[currentIndex] = '';
          return otpArray.join('');
        });
        break;
      case 'Backspace':
        event.preventDefault();
        if (currentIndex > 0) {
          focusInput(currentIndex - 1);
          selectInput(currentIndex - 1);
        }
        onChange((prevOtp) => {
          const otpArray = prevOtp.split('');
          otpArray[currentIndex] = '';
          return otpArray.join('');
        });
        break;
      default:
        break;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, currentIndex: number) => {
    const currentValue = event.target.value;
    if (/^\d$/.test(currentValue)) {
      // Ensure only one digit is entered
      onChange((prev) => {
        const otpArray = prev.split('');
        otpArray[currentIndex] = currentValue;
        return otpArray.join('');
      });
      if (currentIndex < length - 1) {
        focusInput(currentIndex + 1);
      }
    }
  };

  const handleClick = (_: React.MouseEvent<HTMLInputElement, MouseEvent>, currentIndex: number) => {
    selectInput(currentIndex);
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>, currentIndex: number) => {
    event.preventDefault();
    const clipboardData = event.clipboardData.getData('text/plain').replace(/\D/g, '');
    if (clipboardData) {
      const pastedText = clipboardData.substring(0, length - currentIndex);
      onChange((prev) => {
        const otpArray = prev.split('');
        for (let i = 0; i < pastedText.length; i++) {
          otpArray[currentIndex + i] = pastedText[i];
        }
        return otpArray.join('');
      });
    }
  };

  return (
    <Stack direction="column" gap={0} display="contents">
      <Stack direction="row" gap={3} width="100%" height="68px" alignItems="center">
        {new Array(length).fill(null).map((_, index) => (
          <React.Fragment key={index}>
            <InputElement
              error={!!error}
              inputRef={(ele) => {
                inputRefs.current[index] = ele!;
              }}
              onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) => handleKeyDown(event, index)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => handleChange(event, index)}
              onClick={(event: React.MouseEvent<HTMLInputElement, MouseEvent>) => handleClick(event, index)}
              onPaste={(event: React.ClipboardEvent<HTMLInputElement>) => handlePaste(event, index)}
              value={value[index] || ''}
              inputProps={{ maxLength: 1, style: { textAlign: 'center' } }}
            />
            {index === 2 && index !== length - 1 && (separator ?? <span>-</span>)}
          </React.Fragment>
        ))}
      </Stack>
      {error && (
        <Typography variant="caption" color="text.error.main" p={2}>
          {error ?? ''}
        </Typography>
      )}
    </Stack>
  );
}

const InputElement = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    ...theme.typography.labelXlBold,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
    maxWidth: 40,
    borderRadius: theme.spacing(3),
    borderColor: theme.palette.border.default,
    color: theme.palette.text.body,
    input: {
      '&::placeholder': {
        color: theme.palette.text.default,
        opacity: 1,
      },
    },
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
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: theme.palette.border.action,
        borderWidth: '2px',
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
  '& .MuiFormHelperText-root.Mui-error': {
    color: theme.palette.text.error.main,
  },
  '& .MuiBox-root': {
    color: theme.palette.icon.default.main,
  },
  '&:hover': {
    '& .MuiFormLabel-root': {
      color: theme.palette.text.action,
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.primary.light,
    },
  },
  '& .MuiFormLabel-root': {
    ...theme.typography.caption,
    color: theme.palette.text.body,
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
    fontSize: theme.typography.caption.fontSize,
  },
}));

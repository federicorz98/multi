import React, { useState } from 'react';
import { InputAdornment, Stack, Box, useTheme } from '@mui/material';
import { CheckCircle, MinusCircle, PlusCircle, XCircle } from '@phosphor-icons/react';
import { NumberInputProps } from './NumberInput.props';
import { THOUSAND_SEPARATOR } from '@models/number.model';
import TextInput from '../text-input/TextInput';
import IconButton from '@components/buttons/icon-button/IconButton';
import { CustomNumberFormat } from './CustomNumberFormat';

/**
 * Styled Number input
 * @since 1.0.0
 * */
const NumberInput = ({
  error,
  defaultValue,
  decimals,
  allowNegative = false,
  prefix,
  suffix,
  value,
  maxLength,
  thousandSeparator = THOUSAND_SEPARATOR,
  allowLeadingZeros,
  showStatusIcon,
  onPlus,
  onMinus,
  ...rest
}: NumberInputProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const numberInput = (
    <TextInput
      fullWidth
      InputProps={{
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputComponent: CustomNumberFormat as any,
        inputProps: {
          decimals,
          allowNegative,
          thousandSeparator,
          maxLength,
          allowLeadingZeros,
        },
        startAdornment: (isFocused || value !== undefined) && prefix && <InputAdornment position="start">{prefix}</InputAdornment>,
        endAdornment:
          ((isFocused || value !== undefined) && suffix && <InputAdornment position="end">{suffix}</InputAdornment>) ||
          (showStatusIcon && error && <XCircle color={theme.palette.icon.error} size={24} />) ||
          (showStatusIcon && !!value && <CheckCircle color={theme.palette.icon.success} size={24} />),
      }}
      {...rest}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      defaultValue={defaultValue}
      error={error}
      value={value}
    />
  );

  return (
    <>
      {onPlus && onMinus ? (
        <Stack spacing={6}>
          <Box flex="row">
            {numberInput}
            <IconButton size="l" onClick={() => onMinus()} disabled={Number(value) < 1 || !value}>
              <MinusCircle size={32} weight="light" color={theme.palette.icon.default.main} />
            </IconButton>

            <IconButton size="l" onClick={() => onPlus()}>
              <PlusCircle size={32} weight="light" color={theme.palette.icon.default.main} />
            </IconButton>
          </Box>
        </Stack>
      ) : (
        numberInput
      )}
    </>
  );
};

export default NumberInput;

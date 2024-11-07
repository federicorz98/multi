import { Box } from '@mui/material';
import { useState } from 'react';
import { Eye, EyeSlash } from '@phosphor-icons/react';
import TextInput from '../text-input/TextInput';
import { TextInputProps } from '../text-input/TextInput.props';

function PasswordAdornment({
  showPassword,
  disabled,
  toggleStatus,
}: {
  showPassword: boolean;
  disabled: boolean;
  toggleStatus: () => void;
}) {
  return (
    <Box width={24} height={24} sx={{ cursor: disabled ? 'auto' : 'pointer' }}>
      {showPassword ? (
        <EyeSlash size={24} aria-label="Ocultar contraseña" onClick={toggleStatus} />
      ) : (
        <Eye
          size={24}
          aria-label="Mostrar contraseña"
          onClick={() => {
            if (!disabled) {
              toggleStatus();
            }
          }}
        />
      )}
    </Box>
  );
}

/**
 * Styled Password input
 * @since 1.0.0
 * */
function PasswordInput({ disabled = false, ...rest }: TextInputProps) {
  const [showPassword, setShowPassword] = useState(true);

  return (
    <TextInput
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <PasswordAdornment
            showPassword={showPassword}
            disabled={disabled}
            toggleStatus={() => {
              setShowPassword(!showPassword);
            }}
          />
        ),
      }}
      {...rest}
    />
  );
}

export default PasswordInput;

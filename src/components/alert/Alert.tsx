import Button from '@components/buttons/button/Button';
import { AlertTitle, useTheme, Alert, Stack, AlertColor } from '@mui/material';
import { WarningCircle, Info, Warning, CheckCircle } from '@phosphor-icons/react';
import { AlertProps } from './Alert.props';
import React from 'react';

/**
 * Styled MUI Alert
 * @see {@link https://mui.com/material-ui/react-alert/} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=14410-10057&t=AtV1GPEnzD187re8-4} Figma Component
 * @since 1.0.0
 *  */
const AlertComponent = ({ title, icon, body, severity, sx, footer, onClose, ...props }: AlertProps) => {
  const { palette } = useTheme();

  const icons: Record<AlertColor, React.ReactNode> = {
    error: <WarningCircle size="24px" weight="fill" color={palette.icon.error} />,
    warning: <Warning size="24px" weight="fill" color={palette.icon.warning} />,
    info: <Info size="24px" weight="fill" color={palette.icon.info} />,
    success: <CheckCircle size="24px" weight="fill" color={palette.icon.success} />,
  };

  return (
    <Alert
      onClose={onClose}
      severity={severity}
      icon={icon ?? icons[severity as AlertColor]}
      sx={{
        ...sx,
        minHeight: 'fit-content',
        width: '100%',
        position: 'relative',
        '.MuiAlert-action': {
          alignItems: 'start',
          padding: '0px',
          margin: '-6px -8px 0px auto',
        },
        '.MuiAlert-message': {
          minHeight: 'fit-content',
        },
      }}
      {...props}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {body}
      {footer && (
        <Stack sx={footer.sx} direction="row" mt="12px" justifyContent="end">
          <Button label={footer.label} variant="text" size="small" onClick={footer.onClick ?? onClose} />
        </Stack>
      )}
    </Alert>
  );
};

export default AlertComponent;

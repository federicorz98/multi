import { Box, Stack, Typography, useTheme } from '@mui/material';
import { X } from '@phosphor-icons/react';
import { isValidElement } from 'react';
import { DialogProps, Size } from './Dialog.props';
import Button from '@components/buttons/button/Button';
import IconButton from '@components/buttons/icon-button/IconButton';

const DialogSizes: Record<Size, number> = {
  s: 480,
  m: 680,
  l: 720,
};

/**
 * Styled Dialog
 * @todo use {@link https://mui.com/material-ui/react-dialog/} MUI Dialog
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=14885-87610&t=S5OZL4o8KrAZJWhm-4} Figma Component
 * @since 1.0.0
 *  */
const Dialog = ({
  header,
  body,
  footerCaption,
  primary,
  secondary,
  closeCross = true,
  size = 's',
  showHeaderBorder,
  showFooterBorder,
  isModal,
  onClose,
}: DialogProps) => {
  const theme = useTheme();
  const palette = theme.palette;

  return (
    <Stack
      justifyContent="center"
      alignItems="flex-start"
      borderRadius={theme.spacing(3)}
      width={DialogSizes[size]}
      bgcolor="surface.container.level1"
      gap={isModal ? 'unset' : '10px'}
    >
      <Stack
        alignItems="center"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        padding={theme.spacing(5, isModal ? 5 : 4)}
        borderBottom={`${showHeaderBorder ? `1px solid ${palette.border.divider}` : 'unset'}`}
      >
        {isValidElement(header) ? (
          header
        ) : (
          <Typography variant="h4" color={palette.text.headings1} padding={theme.spacing(5, 0)}>
            {header}
          </Typography>
        )}

        {closeCross && (
          <IconButton onClick={onClose}>
            <X fill={palette.icon.body} size={22} weight="bold" />
          </IconButton>
        )}
      </Stack>

      {isValidElement(body) ? (
        body
      ) : (
        <Typography variant="body1" paddingLeft="16px" paddingRight="16px" marginBottom={3}>
          {body}
        </Typography>
      )}

      <Stack width="100%" borderTop={`${showFooterBorder ? `1px solid ${palette.border.action}` : 'unset'}`}>
        {footerCaption && isModal && (
          <Box px={5} paddingTop={5}>
            {footerCaption}
          </Box>
        )}
        <Stack flexDirection="row" gap="12px" height={80} padding={theme.spacing(5, isModal ? 5 : 4)} width="100%" boxSizing="border-box">
          <Button
            isLoading={secondary.isLoading}
            loadingText={secondary.loadingText ?? 'Enviando...'}
            disabled={secondary.isLoading || secondary.disabled}
            onClick={secondary.onClick ?? onClose}
            label={secondary.label ?? 'Cancelar'}
            variant="outlined"
            size="small"
            fullWidth
          />
          <Button
            isLoading={primary.isLoading}
            loadingText={primary.loadingText ?? 'Enviando...'}
            disabled={primary.isLoading || primary.disabled}
            onClick={primary.onClick}
            label={primary.label ?? 'Aceptar'}
            variant="contained"
            size="small"
            fullWidth
          />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Dialog;

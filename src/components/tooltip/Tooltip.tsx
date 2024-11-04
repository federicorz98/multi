import { Tooltip as MuiTooltip, Stack, Typography, useTheme } from '@mui/material';
import { Info } from '@phosphor-icons/react';
import { TooltipProps } from './Tooltip.props';

const Tooltip = ({ title, text, size = 'sm', maxWidth = 230, textAlign, infoIconStyle, ...rest }: TooltipProps) => {
  const { palette } = useTheme();

  return (
    <MuiTooltip
      title={
        <Stack spacing={size !== 'sm' ? 3 : 0}>
          {title && (
            <Typography variant="h6" color={palette.text.onInverted}>
              {title}
            </Typography>
          )}
          {text && (
            <Typography variant="labelXsRegular" color={palette.text.onInverted}>
              {text}
            </Typography>
          )}
        </Stack>
      }
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: palette.surface.containerTooltips,
            color: palette.text.onInverted,
            p: ({ spacing }) => spacing(size === 'md' ? 3 : 2, 3),
          },
        },
        arrow: { sx: { color: palette.surface.containerTooltips } },
        popper: {
          sx: { maxWidth: maxWidth ?? 230, textAlign: textAlign ?? 'left' },
        },
      }}
      {...rest}
    >
      {rest?.children ?? <Info size={22} color={palette.icon.action.main} style={{ ...infoIconStyle }} />}
    </MuiTooltip>
  );
};

export default Tooltip;

/* eslint-disable @typescript-eslint/no-explicit-any */
import { PaletteOptions, createTheme } from '@mui/material';
import { spacing } from './spacing';
import { typography } from './typography';

/**
 * Create a custom theme based on a palette
 * @param customPalette (dark/light)
 * @param basePalette primitive color tokens
 * @returns Theme
 */
export const createCustomTheme = (customPalette: PaletteOptions, basePalette: any) =>
  createTheme({
    palette: customPalette,
    spacing: (factor: number) => {
      const index = Math.floor(factor);
      return spacing[index];
    },
    typography,
    components: {
      MuiTypography: {
        defaultProps: {
          fontFamily: 'Inter',
          color: customPalette.text?.body,
        },
        variants: [
          {
            props: { variant: 'subtitle1' },
            style: {
              color: customPalette.text?.subtitle,
            },
          },
        ],
      },
      MuiCardHeader: {
        defaultProps: {
          titleTypographyProps: { variant: 'subtitle1' },
        },
      },
      MuiAlertTitle: {
        styleOverrides: {
          root: {
            ...typography.h5,
          },
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: {
            color: customPalette.text?.default,
            boxSizing: 'border-box',
            display: 'flex',
            width: 448,
            minHeight: 68,
            gap: '12px',
            padding: '12px 12px 12px 16px',
            margin: 0,
            alignItems: 'start',
            borderRadius: spacing[3],
            '& .MuiAlert-message': {
              display: 'flex',
              flexDirection: 'column',
              minHeight: 44,
              gap: spacing[2],
              padding: 0,
            },
            '.MuiAlert-icon': {
              margin: 0,
              padding: 0,
              alignSelf: 'flex-start',
            },
            '.MuiTypography-root': {
              margin: 0,
            },
          },
        },
        variants: [
          {
            props: { severity: 'error' },
            style: {
              backgroundColor: customPalette.surface.error.main,
            },
          },
          {
            props: { severity: 'warning' },
            style: {
              backgroundColor: customPalette.surface.warning.main,
            },
          },
          {
            props: { severity: 'info' },
            style: {
              backgroundColor: customPalette.surface.info.main,
            },
          },
          {
            props: { severity: 'success' },
            style: {
              backgroundColor: customPalette.surface.info.main,
            },
          },
        ],
      },
      MuiChip: {
        variants: [
          {
            props: { variant: 'filled' },
            style: {
              backgroundColor: customPalette.surface.onAction.secondary,
              color: customPalette.text?.default,
              '&:hover': {
                backgroundColor: customPalette.surface.onAction.secondaryHover,
              },
            },
          },
          {
            props: { variant: 'successGhost' },
            style: {
              border: `1px solid ${customPalette.surface.success.status}`,
              backgroundColor: customPalette.surface.success.status,
              color: customPalette.text?.success?.main,
            },
          },
          {
            props: { variant: 'success' },
            style: {
              border: `1px solid ${customPalette.surface.success.status}`,
              backgroundColor: customPalette.surface.success.status,
              color: customPalette.text?.success?.main,
            },
          },
          {
            props: { variant: 'successOutlined' },
            style: {
              border: `1px solid ${customPalette.surface.success.main}`,
              backgroundColor: basePalette.neutrals.white,
              color: customPalette.text?.success?.main,
            },
          },
          {
            props: { variant: 'rejectedGhost' },
            style: {
              border: `1px solid ${customPalette.surface.error.status}`,
              backgroundColor: customPalette.surface.error.status,
              color: customPalette.text?.error?.onInverted,
            },
          },
          {
            props: { variant: 'rejected' },
            style: {
              border: `1px solid ${customPalette.surface.error.status}`,
              backgroundColor: customPalette.surface.error.main,
              color: basePalette.neutrals.white,
            },
          },
          {
            props: { variant: 'rejectedOutlined' },
            style: {
              border: `1px solid ${customPalette.border.error}`,
              backgroundColor: basePalette.neutrals.white,
              color: customPalette.text?.error?.main,
            },
          },
          {
            props: { variant: 'pendingGhost' },
            style: {
              border: `1px solid ${customPalette.surface.warning.status}`,
              backgroundColor: customPalette.surface.warning.status,
              color: customPalette.text?.warning?.main,
            },
          },
          {
            props: { variant: 'pending' },
            style: {
              border: `1px solid ${customPalette.surface.warning.status}`,
              backgroundColor: customPalette.surface.warning.status,
              color: basePalette.neutrals.white,
            },
          },
          {
            props: { variant: 'pendingOutlined' },
            style: {
              border: `1px solid ${customPalette.surface.warning.status}`,
              backgroundColor: basePalette.neutrals.white,
              color: basePalette.neutrals.white,
            },
          },
          {
            props: { variant: 'defaultGhost' },
            style: {
              backgroundColor: customPalette.surface.info.status,
              color: customPalette.text?.info?.main,
            },
          },
          {
            props: { variant: 'default' },
            style: {
              border: `1px solid ${basePalette.primary.main}`,
              backgroundColor: basePalette.primary.main,
              color: basePalette.neutrals.white,
            },
          },
          {
            props: { variant: 'defaultOutlined' },
            style: {
              border: `1px solid ${basePalette.primary.dark}`,
              backgroundColor: basePalette.neutrals.white,
              color: basePalette.primary.dark,
            },
          },
          {
            props: { variant: 'fieldData' },
            style: {
              backgroundColor: customPalette.surface.container.level1,
              padding: `10px 14px`,
              textAlign: 'center',
              borderRadius: '8px',
              border: `1px solid ${customPalette.border.default}`,
              height: 40,
              minWidth: 110,
              fontFamily: 'Inter',
              ...typography.body1,
            },
          },
        ],
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
        },
        styleOverrides: {
          root: ({ ownerState }) => ({
            ...typography.buttonMd,
            border: '1px solid',
            borderRadius: '8px',
            boxShadow: 'none',
            color: customPalette.text?.onAction,
            gap: '8px',
            textTransform: 'none',
            height: '32px',
            ...(ownerState.size === 'large' && {
              ...typography.buttonLg,
              height: '42px',
            }),
            ...(ownerState.size === 'medium' && {
              ...typography.buttonMd,
              height: '36px',
            }),

            '&.Mui-disabled': {
              backgroundColor: customPalette.surface.disabled,
              borderColor: customPalette.surface.disabled,
              color: customPalette.text?.disabled,
            },
            '& svg': {
              width: '24px',
              height: '24px',
            },
          }),
          contained: () => ({
            backgroundColor: 'red',
          }),
        },
        variants: [
          {
            props: { variant: 'contained' },
            style: {
              backgroundColor: customPalette.surface?.action,
              color: customPalette.text?.onAction,
              borderColor: 'transparent',
              '&:hover': {
                backgroundColor: customPalette.surface.actionHover,
                color: customPalette.text?.onAction,
                boxShadow: 'none',
              },
            },
          },
          {
            props: { variant: 'text' },
            style: {
              backgroundColor: 'transparent',
              color: customPalette.text?.action,
              borderColor: 'transparent',
              '&:hover': {
                borderColor: 'transparent',
                backgroundColor: customPalette.surface.hover,
              },
            },
          },
          {
            props: { variant: 'outlined' },
            style: {
              backgroundColor: 'transparent',
              color: customPalette.text?.action,
              borderColor: customPalette.border.action,
              '&:hover': {
                backgroundColor: `${customPalette.surface.onAction.secondary} !important`,
                borderColor: customPalette.border.action,
              },
            },
          },
        ],
      },
      MuiSkeleton: {
        styleOverrides: {
          root: {
            transform: 'none',
            backgroundColor: customPalette.surface.disabled,
          },
        },
        variants: [
          {
            props: { variant: 'text' },
            style: {
              borderRadius: '5px',
            },
          },
        ],
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: customPalette.border.divider,
          },
        },
      },
      MuiCheckbox: {
        styleOverrides: {
          root: {
            color: customPalette.icon.default.main,
            '& svg': {
              color: customPalette.icon.action.main,
            },
          },
        },
      },
    },
  });

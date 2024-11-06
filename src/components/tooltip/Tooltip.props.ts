import { TooltipProps as MuiTooltipProps } from '@mui/material';
import React from 'react';

/**
 * Define props for Tooltip component
 * @extends MuiTooltipProps
 * @see {@link https://mui.com/material-ui/api/tooltip/#props}
 * */
export type TooltipProps = {
  title?: React.ReactNode;
  text?: React.ReactNode;
  size?: 'sm' | 'md';
  maxWidth?: number;
  textAlign?: 'left' | 'center' | 'right';
  infoIconStyle?: React.CSSProperties;
} & Partial<Omit<MuiTooltipProps, 'title'>>;

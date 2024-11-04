import { PaletteOptions } from '@mui/material';
import { palette } from './palette';

/**
 * Related to dark mapped brand's palette.
 * @see [Figma]{@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=11977-11742&t=AyPzyXm06VIK4TgC-4}
 */
export const darkBasePalette: PaletteOptions = {
  ...palette,
  mode: 'dark',
  surface: {
    page: palette.grey[950],
    container: {
      level1: palette.grey[800],
      level2: palette.grey[850],
    },
    inverted: palette.neutrals.black,
    action: palette.primary.light,
    actionHover: palette.primary.lighter,
    selected: palette.primary.light,
    onAction: {
      primary: palette.transparent.primary.alphaLighter,
      secondary: palette.transparent.primary.alphaLighter,
      secondaryHover: palette.transparent.primary.alphaLight,
    },
    hover: palette.transparent.primary.alphaLighter,
    disabled: palette.grey[700],
    containerTooltips: palette.primary.lightest,
    footer: palette.primary.light,
    overlay: palette.transparent.overlay[75],
    overlayBrand: palette.special.primary.cc[32],
    highlight: palette.primary.darkest,
    info: {
      main: palette.grey[850],
      inverted: palette.primary.lightest,
      status: palette.primary.dark,
    },
    success: {
      main: palette.grey[850],
      inverted: palette.success.lighter,
      status: palette.success.dark,
    },
    warning: {
      main: palette.grey[850],
      inverted: palette.warning.lighter,
      status: palette.warning.main,
    },
    error: {
      main: palette.grey[850],
      inverted: palette.error.lighter,
      status: palette.error.dark,
    },
  },
  text: {
    headings1: palette.grey[100],
    headings2: palette.primary.lightest,
    action: palette.primary.xxLight,
    actionInverted: palette.primary.main,
    selected: palette.primary.xLight,
    onAction: palette.neutrals.white,
    onInverted: palette.grey[800],
    body: palette.grey[100],
    default: palette.grey[200],
    disabled: palette.grey[500],
    bigUnitDecimals: palette.grey[400],
    subtitle: palette.grey[400],
    link: palette.primary.xLight,
    success: {
      main: palette.success.lighter,
      subtle: palette.success.light,
      inverted: palette.success.main,
    },
    error: {
      main: palette.error.light,
      onInverted: palette.error.lighter,
      inverted: palette.error.main,
    },
    warning: {
      main: palette.warning.lighter,
      inverted: palette.warning.main,
    },
    info: {
      main: palette.primary.lightest,
      inverted: palette.primary.main,
    },
  },
  icon: {
    headings: palette.primary.lightest,
    body: palette.grey[100],
    default: {
      main: palette.grey[200],
      secondary: palette.grey[200],
    },
    action: {
      main: palette.primary.lighter,
      secondary: palette.primary.lighter,
    },
    onAction: palette.neutrals.white,
    selected: palette.primary.xLight,
    disabled: palette.grey[500],
    info: palette.primary.lighter,
    success: palette.success.light,
    error: palette.error.light,
    errorSubtle: palette.error.lighter,
    warning: palette.warning.light,
  },
  border: {
    action: palette.primary.lighter,
    selected: palette.primary.xLight,
    default: palette.grey[200],
    disabled: palette.grey[600],
    divider: palette.grey[600],
    container: palette.grey[600],
    subtle: palette.transparent.primary.alphaLighter,
    error: palette.error.light,
  },
  chart: {
    category: {
      1: palette.primary.darkest,
      2: palette.primary.darker,
      3: palette.primary.main,
      4: palette.primary.lighter,
      5: palette.primary.xxLight,
      6: palette.primary.lightest,
    },
  },
  datagrids: {
    surface: {
      header: {
        main: palette.special.datagrid.header.dark,
        sell: palette.special.datagrid.header.sellDark,
        buy: palette.special.datagrid.header.buyDark,
      },
      cell: {
        sell: palette.special.datagrid.cell.sellDark,
        sellHover: palette.special.datagrid.cell.sellDarkHover,
        sellUp: palette.special.datagrid.cell.sellUpDark,
        sellUpHover: palette.special.datagrid.cell.sellUpDarkHover,
        sellDown: palette.special.datagrid.cell.sellDownDark,
        sellDownHover: palette.special.datagrid.cell.sellDownDarkHover,
        buy: palette.special.datagrid.cell.buyDark,
        buyHover: palette.special.datagrid.cell.buyDarkHover,
        buyUp: palette.special.datagrid.cell.buyUpDark,
        buyUpHover: palette.special.datagrid.cell.buyUpDarkHover,
        buyDown: palette.special.datagrid.cell.buyDownDark,
        buyDownHover: palette.special.datagrid.cell.buyDownDarkHover,
      },
    },
  },
};

import { PaletteOptions } from '@mui/material';
import { BasePalette } from '@mui/material/styles';

/**
 * Related to light mapped brand's palette.
 * @see [Figma]{@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=11977-11742&t=AyPzyXm06VIK4TgC-4}
 */
export const getLightBasePalette = (palette: BasePalette): PaletteOptions => ({
  ...palette,
  mode: 'light',
  surface: {
    page: palette.primary.xxLight,
    container: {
      level1: palette.neutrals.white,
      level2: palette.primary.lightest,
    },
    inverted: palette.neutrals.white,
    action: palette.primary.main,
    actionHover: palette.primary.dark,
    selected: palette.primary.xxLight,
    onAction: {
      primary: palette.transparent.primary.alphaLight,
      secondary: palette.primary.xxLight,
      secondaryHover: palette.grey[200],
    },
    hover: palette.transparent.grey.alphaLightest,
    disabled: palette.grey[100],
    containerTooltips: palette.primary.darkest,
    footer: palette.primary.dark,
    overlay: palette.transparent.overlay[65],
    overlayBrand: palette.special.primary.cc[8],
    highlight: palette.primary.lightest,
    info: {
      main: palette.primary.lightest,
      inverted: palette.primary.main,
      status: palette.primary.lightest,
    },
    success: {
      main: palette.success.lighter,
      inverted: palette.success.main,
      status: palette.success.lighter,
    },
    warning: {
      main: palette.warning.lighter,
      inverted: palette.warning.main,
      status: palette.warning.lighter,
    },
    error: {
      main: palette.error.lighter,
      inverted: palette.error.main,
      status: palette.error.lighter,
    },
  },
  text: {
    headings1: palette.grey[800],
    headings2: palette.primary.dark,
    action: palette.primary.main,
    actionInverted: palette.primary.xLight,
    selected: palette.primary.dark,
    onAction: palette.neutrals.white,
    onInverted: palette.neutrals.white,
    body: palette.grey[800],
    default: palette.grey[600],
    disabled: palette.grey[200],
    bigUnitDecimals: palette.grey[400],
    subtitle: palette.grey[400],
    link: palette.primary.main,
    success: {
      main: palette.success.main,
      subtle: palette.success.main,
      inverted: palette.neutrals.white,
    },
    error: {
      main: palette.error.main,
      onInverted: palette.error.main,
      inverted: palette.neutrals.white,
    },
    warning: {
      main: palette.warning.main,
      inverted: palette.neutrals.white,
    },
    info: {
      main: palette.primary.main,
      inverted: palette.neutrals.white,
    },
  },
  icon: {
    headings: palette.primary.dark,
    body: palette.grey[800],
    default: {
      main: palette.grey[600],
      secondary: palette.primary.main,
    },
    action: {
      main: palette.primary.main,
      secondary: palette.primary.lighter,
    },
    onAction: palette.neutrals.white,
    selected: palette.primary.dark,
    disabled: palette.grey[200],
    info: palette.primary.main,
    success: palette.success.main,
    error: palette.error.main,
    errorSubtle: palette.error.main,
    warning: palette.warning.light,
  },
  border: {
    action: palette.primary.dark,
    selected: palette.primary.dark,
    default: palette.grey[400],
    disabled: palette.grey[200],
    divider: palette.grey[200],
    container: palette.transparent.invisible,
    subtle: palette.grey[100],
    error: palette.error.main,
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
        main: palette.special.datagrid.header.main,
        sell: palette.special.datagrid.header.sell,
        buy: palette.special.datagrid.header.buy,
      },
      cell: {
        sell: palette.special.datagrid.cell.sell,
        sellHover: palette.special.datagrid.cell.sellHover,
        sellUp: palette.special.datagrid.cell.sellUp,
        sellUpHover: palette.special.datagrid.cell.sellUpHover,
        sellDown: palette.special.datagrid.cell.sellDown,
        sellDownHover: palette.special.datagrid.cell.sellDownHover,
        buy: palette.special.datagrid.cell.buy,
        buyHover: palette.special.datagrid.cell.buyHover,
        buyUp: palette.special.datagrid.cell.buyUp,
        buyUpHover: palette.special.datagrid.cell.buyUpHover,
        buyDown: palette.special.datagrid.cell.buyDown,
        buyDownHover: palette.special.datagrid.cell.buyDownHover,
      },
    },
  },
});

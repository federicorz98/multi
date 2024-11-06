import * as CustomStyles from '@mui/material/styles';

type surface = {
  page: string;
  container: {
    level1: string;
    level2: string;
  };
  inverted: string;
  action: string;
  actionHover: string;
  selected: string;
  onAction: {
    primary: string;
    secondary: string;
    secondaryHover: string;
  };
  hover: string;
  disabled: string;
  containerTooltips: string;
  footer: string;
  overlay: string;
  overlayBrand: string;
  highlight: string;
  info: ColorOptions;
  success: ColorOptions;
  warning: ColorOptions;
  error: ColorOptions;
};

type icon = {
  headings: string;
  body: string;
  default: {
    main: string;
    secondary: string;
  };
  action: {
    main: string;
    secondary: string;
  };
  onAction: string;
  selected: string;
  disabled: string;
  info: string;
  success: string;
  error: string;
  errorSubtle: string;
  warning: string;
};

type neutrals = {
  white: string;
  black: string;
};

type border = {
  primary?: string;
  cellBorder?: string;
  action: string;
  selected: string;
  default: string;
  disabled: string;
  divider: string;
  container: string;
  subtle: string;
  error: string;
};

type datagrids = {
  surface: {
    header: {
      main: string;
      dark: string;
      sell: string;
      sellDark: string;
      buy: string;
      buyDark: string;
    };
    cell: {
      sell: string;
      sellHover: string;
      sellDark: string;
      sellDarkHover: string;
      buy: string;
      buyDark: string;
      buyHover: string;
      buyDarkHover: string;
      sellUp: string;
      sellUpHover: string;
      sellUpDark: string;
      sellUpDarkHover: string;
      sellDown: string;
      sellDownHover: string;
      sellDownDark: string;
      sellDownDarkHover: string;
      buyUp: string;
      buyUpHover: string;
      buyUpDark: string;
      buyUpDarkHover: string;
      buyDown: string;
      buyDownHover: string;
      buyDownDark: string;
      buyDownDarkHover: string;
    };
  };
};

declare module '@mui/material/styles' {
  interface BasePalette {
    error: ColorVariants;
    grey: ReturnType<typeof generateGreyTints>;
    neutrals: Neutrals;
    primary: ReturnType<typeof generatePrimary>;
    special: ReturnType<typeof generateSpecial>;
    success: ColorVariants;
    transparent: ReturnType<typeof generateTransparent>;
    warning: ColorVariants;
  }

  interface Palette {
    special: {
      primary: {
        cc: {
          8: string;
          32: string;
        };
      };
      datagrid: {
        header: {
          sell: string;
          sellDark: string;
          buy: string;
          buyDark: string;
        };
        cell: {
          sell: string;
          sellHover: string;
          sellDark: string;
          sellDarkHover: string;
          buy: string;
          buyDark: string;
          buyHover: string;
          buyDarkHover: string;
          sellUp: string;
          sellUpHover: string;
          sellUpDark: string;
          sellUpDarkHover: string;
          sellDown: string;
          sellDownHover: string;
          sellDownDark: string;
          sellDownDarkHover: string;
          buyUp: string;
          buyUpHover: string;
          buyUpDark: string;
          buyUpDarkHover: string;
          buyDown: string;
          buyDownHover: string;
          buyDownDark: string;
          buyDownDarkHover: string;
        };
      };
    };
    transparent: {
      primary: {
        alphaLighter: string;
        alphaLight: string;
        alphaMedium: string;
      };
      grey: {
        alphaLightest: string;
        alphaLighter: string;
        alphaLight: string;
      };
      overlay: {
        75: string;
        65: string;
      };
      invisible: string;
    };
    neutrals;
    border;
    surface;
    icon;
    chart: {
      category: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
      };
    };
    datagrids;
  }

  interface PaletteOptions {
    surface;
    icon;
    neutrals;
    border;
    chart: {
      category: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
      };
    };
    datagrids;
  }

  interface PaletteColor {
    lightest: string;
    soft: string;
    xxLight: string;
    xLight: string;
    lightPastel: string;
    lighter: string;
    darker: string;
    darkest: string;
    alpha: {
      12: string;
      20: string;
    };
  }

  interface TypeText {
    headings1: string;
    headings2: string;
    action: string;
    actionInverted: string;
    selected: string;
    onAction: string;
    onInverted: string;
    body: string;
    default: string;
    disabled: string;
    bigUnitDecimals: string;
    subtitle: string;
    link: string;
    success: ColorOptions;
    error: ColorOptions;
    warning: ColorOptions;
    info: ColorOptions;
  }

  interface SimplePaletteColorOptions {
    lightest?: string;
    soft?: string;
    xxLight?: string;
    xLight?: string;
    lightPastel?: string;
    lighter: string;
    darker?: string;
    darkest?: string;
    alpha?: {
      12: string;
      20: string;
    };
  }
}

interface ColorOptions {
  main: string;
  inverted: string;
  status?: string;
  subtle?: string;
  onInverted?: string;
}

export default CustomStyles;

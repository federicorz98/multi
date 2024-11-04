import { ColorScheme, GALLO_CONFIG, PALETTE_CONFIG } from './config';

// TODO - make configurable
const { huePrimary, hueError, hueSuccess, hueWarning, saturationMain, lightnessMain, lightnessDark }: ColorScheme = GALLO_CONFIG;

// check low saturation brand
const hasLowSaturation = saturationMain < PALETTE_CONFIG.saturation.minThreshold;

/**
 * Related to brand's palette.
 * @see [Figma]{@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=11977-10460&t=AyPzyXm06VIK4TgC-4}
 */
export const palette = {
  error: {
    lighter: `hsl(${hueError}, 90%, 94%)`,
    light: `hsl(${hueError}, 90%, 78%)`,
    main: `hsl(${hueError}, 90%, 42%)`,
    dark: `hsl(${hueError}, 90%, 32%)`,
    darker: `hsl(${hueError}, $90%, 22%)`,
  },
  grey: generateGreyTints(),
  neutrals: {
    black: '#000000',
    white: '#FFFFFF',
  },
  primary: generatePrimary(),
  special: generateSpecial(),
  success: {
    lighter: `hsl(${hueSuccess}, 28%, 92%)`,
    light: `hsl(${hueSuccess}, 45%, 73%)`,
    main: `hsl(${hueSuccess}, 84%, 24%)`,
    dark: `hsl(${hueSuccess}, 100%, 18%)`,
    darker: `hsl(${hueSuccess}, 100%, 10%)`,
  },
  transparent: generateTransparent(),
  warning: {
    lightPastel: `hsl(${hueWarning}, 37%, 92%)`,
    lighter: `hsl(${hueWarning}, 95%, 92%)`,
    light: `hsl(${hueWarning}, 95%, 45%)`,
    main: `hsl(${hueWarning}, 95%, 30%)`,
  },
};

function generateGreyTints() {
  const saturation = hasLowSaturation ? '0%' : '10%';
  const hue = hasLowSaturation ? '0' : huePrimary;

  return {
    '950': `hsl(${hue}, ${saturation}, 12%)`,
    '900': `hsl(${hue}, ${saturation}, 15%)`,
    '850': `hsl(${hue}, ${saturation}, 20%)`,
    '800': `hsl(${hue}, ${saturation}, 25%)`,
    '700': `hsl(${hue}, ${saturation}, 35%)`,
    '600': `hsl(${hue}, ${saturation}, 45%)`,
    '500': `hsl(${hue}, ${saturation}, 55%)`,
    '400': `hsl(${hue}, ${saturation}, 65%)`,
    '300': `hsl(${hue}, ${saturation}, 75%)`,
    '200': `hsl(${hue}, ${saturation}, 85%)`,
    '100': `hsl(${hue}, ${saturation}, 95%)`,
  };
}

function generatePrimary() {
  return {
    lightest: `hsl(${huePrimary}, ${getSaturation('67%')}, 97%)`,
    soft: `hsl(${huePrimary}, ${getSaturation('44%')}, 90%)`,
    xxLight: `hsl(${huePrimary}, ${getSaturation('67%')}, 93%)`,
    xLight: `hsl(${huePrimary}, ${getSaturation('67%')}, 83%)`,
    lighter: `hsl(${huePrimary}, ${getSaturation(`${saturationMain}%`)}, 72%)`,
    light: `hsl(${huePrimary}, ${getSaturation(`${saturationMain}%`)}, ${getLightness('62%', '46%')})`,
    main: `hsl(${huePrimary}, ${getSaturation(`${saturationMain}%`)}, ${lightnessMain}%)`,
    dark: `hsl(${huePrimary}, ${getSaturation(`${saturationMain}%`)}, ${lightnessDark}%)`,
    darker: `hsl(${huePrimary}, ${getSaturation(`${saturationMain}%`)}, 32%)`,
    darkest: `hsl(${huePrimary}, ${getSaturation(`${saturationMain}%`)}, 12%)`,
    alpha: {
      20: `hsla(${huePrimary}, ${getSaturation(`${saturationMain}%`)}, 32%, 0.2)`,
      12: `hsla(${huePrimary}, ${getSaturation(`${saturationMain}%`)}, 32%, 0.12)`,
    },
  };
}

function generateTransparent() {
  return {
    primary: {
      alphaLighter: `hsl(${huePrimary}, ${getSaturation('67%')}, 93%, 0.12)`,
      alphaLight: `hsl(${huePrimary}, ${getSaturation('67%')}, 93%, 0.24)`,
      alphaMedium: `hsl(${huePrimary}, ${getSaturation(`${saturationMain}%`)}, 32%, 0.4)`,
    },
    grey: {
      alphaLightest: `hsl(${huePrimary}, ${getSaturation('10%')}, 35%, 0.04)`,
      alphaLighter: `hsl(${huePrimary}, ${getSaturation('10%')}, 35%, 0.08)`,
      alphaLight: `hsl(${huePrimary}, ${getSaturation('10%')}, 35%, 0.16)`,
    },
    overlay: {
      75: `hsla(0, 0%, 0%, 0.75)`,
      65: `hsla(0, 0%, 0%, 0.65)`,
    },
    invisible: `hsl(${huePrimary}, ${getSaturation('10%')}, 85%, 0)`,
  };
}

function generateSpecial() {
  return {
    primary: {
      cc: {
        8: `hsl(${huePrimary}, ${getSaturation('65%')}, 32%, 0.08)`,
        32: `hsl(${huePrimary}, ${getSaturation('65%')}, 32%, 0.32)`,
      },
    },
    datagrid: {
      header: {
        main: `hsl(${huePrimary}, ${getSaturation('40%')}, 95%)`,
        sell: `hsl(${huePrimary}, ${getSaturation('40%')}, 92%)`,
        sellDark: `hsl(${huePrimary}, ${getSaturation('45%')}, 23%)`,
        dark: `hsl(${huePrimary}, ${getSaturation('30%')}, 25%)`,
        buy: `hsl(${huePrimary}, ${getSaturation('30%')}, 87%)`,
        buyDark: `hsl(${huePrimary}, ${getSaturation('55%')}, 20%)`,
      },
      cell: {
        sell: `hsl(${huePrimary}, ${getSaturation('10%')}, 95%)`,
        sellHover: `hsl(${huePrimary}, ${getSaturation('60%')}, 95%)`,
        sellDark: `hsl(${huePrimary}, ${getSaturation('10%')}, 35%)`,
        sellDarkHover: `hsl(${huePrimary}, ${getSaturation('20%')}, 35%)`,
        buy: `hsl(${huePrimary}, ${getSaturation('10%')}, 93%)`,
        buyDark: `hsl(${huePrimary}, ${getSaturation('10%')}, 32%)`,
        buyHover: `hsl(${huePrimary}, ${getSaturation('60%')}, 93%)`,
        buyDarkHover: `hsl(${huePrimary}, ${getSaturation('20%')}, 32%)`,
        // cell state change
        sellUp: `hsl(${hueSuccess}, 18%, 90%)`,
        sellUpHover: `hsl(${hueSuccess}, 12%, 86%)`,
        sellUpDark: `hsl(${hueSuccess}, 37%, 28%)`,
        sellUpDarkHover: `hsl(${hueSuccess}, 31%, 32%)`,
        sellDown: `hsl(${hueError}, 37%, 92%)`,
        sellDownHover: `hsl(${hueError}, 20%, 87%)`,
        sellDownDark: `hsl(${hueError}, 47%, 39%)`,
        sellDownDarkHover: `hsl(${hueError}, 41%, 42%)`,
        buyUp: `hsl(${hueSuccess}, 15%, 88%)`,
        buyUpHover: `hsl(${hueSuccess}, 10%, 84%)`,
        buyUpDark: `hsl(${hueSuccess}, 40%, 27%)`,
        buyUpDarkHover: `hsl(${hueSuccess}, 33%, 31%)`,
        buyDown: `hsl(${hueError}, 29%, 90%)`,
        buyDownHover: `hsl(${hueError}, 20%, 85%)`,
        buyDownDark: `hsl(${hueError}, 48%, 37%)`,
        buyDownDarkHover: `hsl(${hueError}, 41%, 41%)`,
      },
    },
  };
}

/**
 * Avoid return a low saturation when the main saturation is also low
 * @returns defaultSaturation if is not under the min saturation threshold, otherwise return the min saturation configured
 */
function getSaturation(defaultSaturation: string) {
  return hasLowSaturation ? `${PALETTE_CONFIG.saturation.min}%` : defaultSaturation;
}

/**
 * Avoid return a low lightness when the main saturation is also low
 * @returns lightness if the main saturation is not under the min saturation threshold, otherwise return the min lightness
 */
function getLightness(lightness: string, minLightness: string) {
  return hasLowSaturation ? minLightness : lightness;
}

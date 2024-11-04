import * as CustomTypography from '@mui/material/Typography';

declare module '@mui/material/styles' {
  interface TypographyVariants {
    subtitle1Md: React.CSSProperties;
    subtitle3: React.CSSProperties;
    subtitle4: React.CSSProperties;
    bodySTabularNums: React.CSSProperties;
    body3: React.CSSProperties;
    body4: React.CSSProperties;
    buttonLg: React.CSSProperties;
    buttonMd: React.CSSProperties;
    buttonSm: React.CSSProperties;
    labelXsBold?: React.CSSProperties;
    labelXsSemibold: React.CSSProperties;
    labelXsRegular: React.CSSProperties;
    labelXsMedium: React.CSSProperties;
    labelXsSmallMedium: React.CSSProperties;
    labelSm: React.CSSProperties;
    labelSmSemibold: React.CSSProperties;
    labelSmBold: React.CSSProperties;
    labelSmMedium: React.CSSProperties;
    labelMdBold: React.CSSProperties;
    labelMdMedium: React.CSSProperties;
    labelMdMediumMEDIUM?: React.CSSProperties;
    labelMdRegular?: React.CSSProperties;
    labelXlMedium: React.CSSProperties;
    labelLgBold: React.CSSProperties;
    labelLgMedium: React.CSSProperties;
    labelLgSemibold: React.CSSProperties;
    labelXlBold: React.CSSProperties;
    labelXxlBold: React.CSSProperties;
    currencySm: React.CSSProperties;
    captionMd: React.CSSProperties;
    captionMedium: React.CSSProperties;
    captionSm: React.CSSProperties;
    subtitle3Medium: React.CSSProperties;
    body2Medium: React.CSSProperties;
    decimalsSm: React.CSSProperties;
    decimalsMd: React.CSSProperties;
    decimalsLg: React.CSSProperties;
    variationLg: React.CSSProperties;
    variationMd: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    subtitle1Md?: React.CSSProperties;
    subtitle3?: React.CSSProperties;
    subtitle4?: React.CSSProperties;
    bodySTabularNums?: React.CSSProperties;
    body3?: React.CSSProperties;
    body4?: React.CSSProperties;
    buttonLg?: React.CSSProperties;
    buttonMd?: React.CSSProperties;
    buttonSm?: React.CSSProperties;
    labelXsBold?: React.CSSProperties;
    labelXsSemibold?: React.CSSProperties;
    labelXsMedium?: React.CSSProperties;
    labelXsRegular: React.CSSProperties;
    labelSm?: React.CSSProperties;
    labelSmSemibold?: React.CSSProperties;
    labelSmBold?: React.CSSProperties;
    labelSmMedium?: React.CSSProperties;
    labelMdBold: React.CSSProperties;
    labelMdMedium?: React.CSSProperties;
    labelMdMediumMEDIUM?: React.CSSProperties;
    labelMdRegular?: React.CSSProperties;
    labelLgMedium?: React.CSSProperties;
    labelLgSemibold?: React.CSSProperties;
    labelXlMedium?: React.CSSProperties;
    labelLgBold?: React.CSSProperties;
    labelXlBold?: React.CSSProperties;
    labelXxlBold?: React.CSSProperties;
    currencySm?: React.CSSProperties;
    captionMd?: React.CSSProperties;
    captionMedium?: React.CSSProperties;
    captionSm?: React.CSSProperties;
    subtitle3Medium?: React.CSSProperties;
    body2Medium?: React.CSSProperties;
    decimalsSm: React.CSSProperties;
    decimalsMd?: React.CSSProperties;
    decimalsLg?: React.CSSProperties;
    variationMd?: React.CSSProperties;
    variationLg?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    subtitle1Md: true;
    subtitle3: true;
    subtitle3Medium: true;
    subtitle4: true;
    bodySTabularNums: true;
    body3: true;
    body4: true;
    buttonLg: true;
    buttonMd: true;
    buttonSm: true;
    labelXsBold: true;
    labelXsSemibold: true;
    labelXsMedium: true;
    labelXsRegular: true;
    labelSmMedium: true;
    labelSmSemibold: true;
    labelSmBold: true;
    labelSm: true;
    labelMdSemibold: true;
    labelMdBold: true;
    labelMdMedium: true;
    labelMdMediumMEDIUM: true;
    labelMdRegular: true;
    labelLgMedium: true;
    labelLgSemibold: true;
    labelLgBold: true;
    labelXlMedium: true;
    labelXlBold: true;
    labelXxlBold: true;
    currencySm: true;
    captionMd: true;
    captionMedium: true;
    captionSm: true;
    integersMd: true;
    decimalsSm: true;
    decimalsMd: true;
    decimalsLg: true;
    variationMd: true;
    variationLg: true;
  }
}

export default CustomTypography;

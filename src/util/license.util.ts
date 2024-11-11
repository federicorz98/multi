import { LicenseInfo } from '@mui/x-license';

/**
 * Init MUI license
 * @see {@link https://mui.com/x/introduction/licensing} MUI licensing Documentation
 */
const initLicenseKey = () => {
  // License key is designed to be public
  // https://mui.com/x/introduction/licensing/#license-key-security
  LicenseInfo.setLicenseKey(
    '15e3fd481ca81f1e78801267bb152d5cTz05OTY2OCxFPTE3NjAxMDkzMzIwMDAsUz1wcm8sTE09c3Vic2NyaXB0aW9uLFBWPVEzLTIwMjQsS1Y9Mg=='
  );
};

export default initLicenseKey();

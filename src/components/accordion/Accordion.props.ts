import { AccordionProps as MuiAccordionProps } from '@mui/material';

/**
 * Define props for Acordion component
 * @extends MuiAccordionProps
 * @see {@link https://mui.com/material-ui/api/accordion/#props} MUI Documentation
 * */
export type AccordionProps = {
  title: string;
  hideBorderDetail?: boolean | false;
  hideBorderAccordion?: boolean | false;
} & MuiAccordionProps;

import { AccordionProps as MuiAccordionProps } from '@mui/material';

/**
 * Define props for Acordion component
 * @extends MuiAccordionProps
 * @see {@link https://mui.com/material-ui/api/accordion/#props} MUI Documentation
 * */
export type AccordionProps = {
  tag: string;
  expanded: string[];
  setExpanded: React.Dispatch<React.SetStateAction<string[]>>;
  hideBorderDetail?: boolean | false;
  hideBorderAccordion?: boolean | false;
} & Omit<MuiAccordionProps, 'expand' | 'onChange'>;

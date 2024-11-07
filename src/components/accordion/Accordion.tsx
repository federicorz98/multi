import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  styled,
  AccordionDetails,
  AccordionSummary,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import { CaretDown, CaretRight } from '@phosphor-icons/react';
import { useState } from 'react';
import { AccordionProps } from './Accordion.props';

/**
 * Styled MUI Accordion with custom styling
 * @see {@link https://mui.com/material-ui/react-accordion} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=2477-5605&t=S5OZL4o8KrAZJWhm-4} Figma Component
 * @since 1.0.0
 *  */
const Accordion = ({ tag, expanded, setExpanded, children, hideBorderDetail, hideBorderAccordion, ...props }: AccordionProps) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleChange = (panel: string) => (_: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded((prevExpanded) => {
      if (newExpanded) {
        return [...prevExpanded, panel];
      } else {
        return prevExpanded.filter((item) => item !== panel);
      }
    });
  };

  return (
    <StyledAccordion
      sx={{ borderBottom: hideBorderAccordion ? 'none' : '' }}
      expanded={expanded.includes(tag)}
      onChange={handleChange(tag)}
      {...props}
    >
      <AccordionSummary>
        <IconButton
          aria-label="expand row"
          size="small"
          onClick={() => setOpen(!open)}
          sx={{
            color: theme.palette.icon.action.main,
            marginRight: theme.spacing(4),
            padding: 0,
          }}
        >
          {expanded.includes(tag) ? <CaretDown size={18} /> : <CaretRight size={18} />}
        </IconButton>
        <Typography variant="h5" color={theme.palette.text.action}>
          {tag}
        </Typography>
      </AccordionSummary>
      <AccordionDetails
        sx={{
          borderBottom: hideBorderDetail
            ? 'none'
            : expanded
              ? `3px solid ${theme.palette.border.divider}`
              : `1px solid ${theme.palette.border.divider}`,
        }}
      >
        {children}
      </AccordionDetails>
    </StyledAccordion>
  );
};

const StyledAccordion = styled((props: MuiAccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    backgroundColor: theme.palette.surface.container.level1,
    textTransform: 'capitalize',
    '& .MuiAccordionSummary-content': {
      alignItems: 'center',
    },
    borderBottom: `1px solid ${theme.palette.border.divider}`,
    '&:not:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  })
);

export default Accordion;

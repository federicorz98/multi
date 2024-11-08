import {
  Accordion as MuiAccordion,
  AccordionProps as MuiAccordionProps,
  styled,
  AccordionDetails,
  AccordionSummary as MuiAccordionSummary,
  Typography,
  useTheme,
  AccordionSummaryProps,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionProps } from './Accordion.props';

/**
 * Styled MUI Accordion with custom styling
 * @see {@link https://mui.com/material-ui/react-accordion} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=2477-5605&t=S5OZL4o8KrAZJWhm-4} Figma Component
 * @since 1.0.0
 *  */
const Accordion = ({ title, expanded, children, hideBorderDetail, hideBorderAccordion, ...props }: AccordionProps) => {
  const theme = useTheme();

  return (
    <StyledAccordion sx={{ borderBottom: hideBorderAccordion ? 'none' : '' }} {...props}>
      <StyledAccordionSummary>
        <Typography variant="h5" color={theme.palette.text.action}>
          {title}
        </Typography>
      </StyledAccordionSummary>
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

const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ExpandMoreIcon
        sx={(theme) => ({
          color: theme.palette.icon.action.main,
        })}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(-90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(3),
  },
}));

export default Accordion;

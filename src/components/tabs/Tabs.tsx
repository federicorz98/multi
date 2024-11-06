import { Tabs as MuiTabs, styled } from '@mui/material';

/**
 * Styled Tabs
 * @see {@link https://mui.com/material-ui/api/tabs/#props} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=314-17181&t=vn3jt8asu9tEdG4o-4} Figma Component
 * @since 1.0.0
 *  */
const Tabs = styled(MuiTabs)(({ theme }) => ({
  '& .MuiTabs-indicator': {
    borderRadius: '2px 2px 0px 0px',
    backgroundColor: theme.palette.border.selected,
  },
  '& .BorderBottom': {
    borderBottom: '1px solid red',
  },
  minHeight: 'inherit',
  height: '44px',
  '.MuiTabs-flexContainer': {
    gap: 24,
  },
  '.MuiTabs-scroller': {
    height: '44px',
  },
  '.MuiTab-root': {
    ...theme.typography.body2,
    padding: 0,
    minWidth: 'inherit',
    textTransform: 'none',
    height: '44px',
    minHeight: 'inherit',
    cursor: 'pointer',
    lineHeight: '1.14',
    gap: 6,
    color: theme.palette.text.default,
    '&.Mui-selected': {
      ...theme.typography.labelSmSemibold,
      color: theme.palette.text.selected,
    },
  },
}));

export default Tabs;

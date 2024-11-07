import { Button, List, styled } from '@mui/material';

type StyledButtonProps = {
  orientation?: string;
};

export const StyledButton = styled(Button)<StyledButtonProps>(({ theme, orientation }) => ({
  color: theme.palette.text.onAction,
  backgroundColor: theme.palette.surface.action,
  borderRadius: theme.spacing(3),
  border: 'none',
  padding: `${theme.spacing(3)} ${orientation === 'left' ? '10px' : ''}`,
  minWidth: 'inherit',

  borderTopRightRadius: theme.spacing(orientation === 'left' ? 0 : 3),
  borderBottomRightRadius: theme.spacing(orientation === 'left' ? 0 : 3),

  borderTopLeftRadius: theme.spacing(orientation === 'right' ? 0 : 3),
  borderBottomLeftRadius: theme.spacing(orientation === 'right' ? 0 : 3),

  '&:hover': {
    backgroundColor: theme.palette.surface.actionHover,
    color: theme.palette.text.onAction,
    border: 'none',
  },
}));

export const StyledList = styled(List)<StyledButtonProps>(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(2),
  padding: theme.spacing(0),
  '.MuiListItemText-root': {
    margin: 0,
  },
}));

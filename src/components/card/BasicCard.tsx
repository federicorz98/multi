import Card from '@mui/material/Card';
import { SxProps, styled, Stack } from '@mui/material';

interface BasicCardProps {
  buttonSize?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  height?: string | number;
  sx?: SxProps;
}

/**
 * Styled Basic card
 * @since 1.0.0
 *
 * @example
 * ```tsx
 * <BasicCard>
 *    <CardHeader title="Title" />
 *    <CardContent>
 *        {children}
 *    </CardContent>
 *    <CardFooter>
 *        {footer}
 *    </CardFooter>
 * </BasicCard>
 * ```
 */
export default function BasicCard({ children, height = '100%', sx }: BasicCardProps) {
  return (
    <StyledCard style={{ height }} sx={sx}>
      <Stack flex={1} bgcolor="surface.container.level1">
        {children}
      </Stack>
    </StyledCard>
  );
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: theme.palette.surface.container.level1,
  backgroundImage: 'none',
  borderRadius: theme.spacing(3),
  boxShadow: '0px 4px 20px -4px rgba(29, 51, 135, 0.12), 0px 0px 4px 0px rgba(29, 52, 135, 0.20)',
  paddingTop: theme.spacing(4),
  '& .MuiCardHeader-root': {
    borderBottom: `1px solid ${theme.palette.border.divider}`,
    paddingTop: 0,
    color: theme.palette.text.headings2,
    '& .MuiCardHeader-title': {
      color: theme.palette.text.headings2,
      ...theme.typography.h3,
      fontSize: 18,
    },
  },
  '& .MuiCardContent-root': {
    marginTop: theme.spacing(4),
    paddingTop: 0,
    '&:last-child': {
      paddingBottom: 0,
    },
    '&.investorProfile-Content': {
      marginTop: 0,
      padding: 0,
    },
  },
  '& .emptyCard': {
    padding: theme.spacing(8, 0, 8, 0),
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
  },
  display: 'flex',
  flexDirection: 'column',
}));

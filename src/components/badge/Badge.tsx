import { Badge as MuiBadge, BadgeProps, styled } from '@mui/material';

/**
 * Styled MUI Badge
 * @see {@link https://mui.com/material-ui/react-badge/} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=9002-36658&t=AtV1GPEnzD187re8-4} Figma Component
 * @since 1.0.0
 *  */
const Badge = styled(MuiBadge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    color: `${theme.palette.text.onInverted}`,
    background: `${theme.palette.icon.error}`,
    fontVariantNumeric: 'lining-nums proportional-nums',
    textAlign: 'center',
    fontFamily: 'inter',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: 700,
    height: 14,
    minWidth: 14,
    paddingLeft: 2,
    paddingRight: 2,
  },
}));

export default Badge;

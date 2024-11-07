import { Chip, ChipProps, useTheme } from '@mui/material';

/**
 * Styled Tag
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=347-19918&t=S5OZL4o8KrAZJWhm-4} Figma Component
 * @since 1.0.0
 *  */
const Tag = ({ ...props }: ChipProps) => {
  const theme = useTheme();

  return (
    <Chip
      {...props}
      sx={{
        borderRadius: 5,
        padding: theme.spacing(1, 3),
        height: 20,
        '& .MuiChip-label': {
          ...theme.typography.caption,
          padding: 0,
        },
        ...props.sx,
      }}
    />
  );
};

export default Tag;

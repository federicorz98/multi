import { Stack, StackProps, Typography } from '@mui/material';
import React from 'react';

type CardHeaderProps = {
  title: React.ReactNode;
  leadingItem?: React.ReactNode;
  secondaryItem?: React.ReactNode;
  trailingItem?: React.ReactNode;
} & StackProps;

/**
 * Styled Card header
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=13464-68596&t=S5OZL4o8KrAZJWhm-4} Figma Component
 * @since 1.0.0
 *  */
const CardHeader = ({ title, leadingItem, secondaryItem, trailingItem, ...props }: CardHeaderProps) => {
  return (
    <Stack
      direction="row"
      paddingY="12px"
      paddingX={4}
      alignItems="baseline"
      justifyContent="space-between"
      gap={3}
      borderBottom="1px solid"
      borderColor="border.divider"
      {...props}
    >
      <Typography variant="h4" color="text.headings2">
        {title}
      </Typography>
      <Stack direction="row" alignItems="baseline" gap={3}>
        {leadingItem}
        {secondaryItem}
        {trailingItem}
      </Stack>
    </Stack>
  );
};

export default CardHeader;

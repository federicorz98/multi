import { Stack, StackProps } from '@mui/material';

const CardContent = ({ children, sx, ...props }: StackProps) => {
  return (
    <Stack padding={4} {...props}>
      {children}
    </Stack>
  );
};

export default CardContent;

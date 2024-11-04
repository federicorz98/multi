import { FormControlLabel, Radio, styled } from '@mui/material';
import { RadioButtonProps } from './RadioButton.props';

/**
 * Styled MUI Radio Button with custom styling
 * @see {@link https://mui.com/material-ui/api/radio} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=11381-6947&t=QLJxRIMSWSHqMwVs-4} Figma Component
 * @since 1.0.0
 *  */
const RadioButton = ({ label, centeredButton, ...props }: RadioButtonProps) => {
  return label ? (
    <FormControlLabel
      slotProps={{
        typography: {
          variant: 'labelMdRegular',
          sx: {
            marginY: 3,
            alignSelf: 'center',
          },
        },
      }}
      sx={{
        gap: '12px',
        alignItems: centeredButton ? 'flex' : 'flex-start',
        marginLeft: 0,
      }}
      label={label}
      control={<StyledRadio {...props} />}
    />
  ) : (
    <StyledRadio {...props} />
  );
};

export default RadioButton;

const StyledRadio = styled(Radio)`
  &.MuiRadio-root {
    padding: 0;
    transition: 0ms;
  }
  .MuiSvgIcon-root {
    width: 32px;
    height: 32px;
    transition: none;
  }
  color: ${({ theme }) => theme.palette.icon.default.main};
  &.Mui-checked {
    color: ${({ theme }) => theme.palette.icon.action.main};
  }
  &.Mui-disabled {
    color: ${({ theme }) => theme.palette.icon.disabled};
  }
`;

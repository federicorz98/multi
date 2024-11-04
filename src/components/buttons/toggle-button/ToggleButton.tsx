import { useEffect, useState } from 'react';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled, ToggleButton as MuiToggleButton, useTheme } from '@mui/material';
import { ToggleButtonProps } from './ToggleButton.props';
import { isRichOptions } from '@models/options.model';
import { spacing } from '@theme/spacing';

/**
 * Styled MUI Toggle Button with custom styling
 * @see {@link https://mui.com/material-ui/api/toggle-button/} MUI Documentation
 * @see {@link https://www.figma.com/design/utT32w0P6SLGau5Hub6xzo/Multi---Design-System?node-id=320-18871&t=QLJxRIMSWSHqMwVs-4} Figma Component
 * @since 1.0.0
 *  */
export default function ToggleButton<T extends string | number>({
  onSelect,
  options,
  defaultValue,
  size = 's',
  fullWidth,
  setValue,
  hideSelection,
  onClick,
  disabled,
  ...props
}: ToggleButtonProps<T>) {
  const [actualValue, setActualValue] = useState(defaultValue);
  const { palette } = useTheme();
  const paddingBySize = {
    xs: '0px 6px',
    s: '0px 8px',
    m: '7px 12px',
    l: '11px 16px',
  };

  useEffect(() => {
    setActualValue(defaultValue);
  }, [defaultValue]);

  const handleChange = (newValue?: T) => {
    if (newValue) {
      setActualValue(newValue);
      onSelect(newValue);
    }
  };

  useEffect(() => {
    setValue && setActualValue(setValue);
  }, [setValue]);

  return (
    <StyledToggleButtonGroup
      value={actualValue}
      exclusive
      onChange={(_, value) => handleChange(value)}
      aria-label="Platform"
      fullWidth={fullWidth}
      disabled={disabled}
      customSize={size}
      sx={{
        '& .MuiToggleButtonGroup-grouped': {
          '&.toggle-button': {
            '&.Mui-selected': {
              backgroundColor: hideSelection ? '' : palette.surface.onAction.secondary,
              color: hideSelection ? '' : palette.text.selected,
            },
          },
        },
      }}
      {...props}
    >
      {Object.keys(options).map((key: string, index: number) => {
        if (isRichOptions(options)) {
          const { content } = options[key as T];
          return (
            <MuiToggleButton
              value={key}
              className="toggle-button"
              key={index}
              disableRipple
              sx={{
                padding: paddingBySize[size],
                display: 'flex',
                alignItems: 'center',
                gap: spacing[1],
              }}
            >
              {content}
            </MuiToggleButton>
          );
        }
        return (
          <MuiToggleButton
            value={key}
            className="toggle-button"
            key={index}
            disableRipple
            sx={{
              padding: paddingBySize[size],
            }}
          >
            {options[key as T]}
          </MuiToggleButton>
        );
      })}
    </StyledToggleButtonGroup>
  );
}

const StyledToggleButtonGroup = styled(ToggleButtonGroup)<{ customSize?: string }>(({ theme, customSize }) => ({
  backgroundColor: theme.palette.surface.container.level1,
  border: `1px solid ${theme.palette.border.default}`,
  padding: 3,
  borderRadius: customSize === 'xs' ? 6 : 8,
  gap: spacing[2],
  display: 'inline-grid',
  gridAutoFlow: 'column',
  gridAutoColumns: '1fr',
  '& .MuiToggleButtonGroup-grouped': {
    '&:not(:first-of-type)': {
      marginLeft: 0,
    },
    '&.toggle-button': {
      ...theme.typography.subtitle1,
      color: theme.palette.text.default,
      border: 'none',
      background: 'none',
      borderRadius: 4,
      boxSizing: 'border-box',
      textTransform: 'none',
    },
    '&.Mui-selected': {
      color: theme.palette.text.selected,
    },
    '&.Mui-disabled': {
      color: theme.palette.text.disabled,
    },
  },
}));

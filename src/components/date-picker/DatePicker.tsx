import { SxProps, alpha, useTheme } from '@mui/material';
import { LocalizationProvider, DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import { esES } from '@mui/x-date-pickers/locales/esES';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { CalendarBlank, CaretDown, CaretLeft, CaretRight } from '@phosphor-icons/react';
import es from 'date-fns/locale/es';
import { DatePickerProps } from './DatePicker.props';
import TextInput from '@components/inputs/text-input/TextInput';

export const DatePicker = ({ label, isFilterPicker = false, ...props }: DatePickerProps) => {
  const theme = useTheme();

  const popperProps: SxProps = {
    backgroundColor: theme.palette.surface.container.level1,
    '& .MuiCalendarPicker-root': {
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.surface.container.level1,
      boxShadow: `0px 4px 20px -4px ${alpha(theme.palette.primary.darker, 0.12)}, 0px 0px 4px 0px ${alpha(
        theme.palette.primary.darker,
        0.2
      )}`,
    },
    '& .MuiIconButton-root': {
      color: theme.palette.icon.action.main,
      width: '32px',
      height: '32px',
      '& svg': { fontSize: '22px' },
    },
    '& .MuiPickersDay-root': {
      typography: theme.typography.body2,
      '&.Mui-selected': {
        typography: theme.typography.subtitle2,
      },
    },
    '& .MuiPickersCalendarHeader-label': {
      textTransform: 'capitalize',
    },
  };

  return (
    <LocalizationProvider
      adapterLocale={es}
      dateAdapter={AdapterDateFns}
      localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
    >
      <MuiDatePicker
        {...props}
        slotProps={{
          textField: {
            label,
          },
          actionBar: { actions: ['clear'] },
          popper: {
            sx: popperProps,
          },
        }}
        slots={{
          openPickerIcon: () => <CalendarBlank fontSize="16px" />,
          leftArrowIcon: () => <CaretLeft />,
          rightArrowIcon: CaretRight,
          switchViewIcon: CaretDown,
          textField: TextInput,
        }}
        sx={{
          '.MuiInputBase-root': { paddingRight: theme.spacing(4), width: isFilterPicker ? '160px' : 'auto' },
          '& label': {
            paddingRight: 2,
            background: theme.palette.surface.container.level1,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default DatePicker;

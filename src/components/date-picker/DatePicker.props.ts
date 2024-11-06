import { DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';

export type DatePickerProps = { label: string; isFilterPicker?: boolean } & MuiDatePickerProps<Date>;

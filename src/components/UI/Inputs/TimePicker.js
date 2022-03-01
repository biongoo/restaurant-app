import TimePickerMui from '@mui/lab/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

import TextField from './TextField';

const TimePicker = ({ value, label, onChange, ...otherProps }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePickerMui
        ampm={false}
        openTo="hours"
        views={['hours', 'minutes', 'seconds']}
        inputFormat="HH:mm:ss"
        mask="__:__:__"
        label={label}
        value={value}
        onChange={onChange}
        renderInput={(params) => <TextField {...params} />}
        {...otherProps}
      />
    </LocalizationProvider>
  );
};

export default TimePicker;

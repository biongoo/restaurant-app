import { Field } from 'redux-form';
import { TextField } from '@mui/material';
import TimePickerMui from '@mui/lab/TimePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const createNumberWithZero = (number) => {
  return number < 10 ? `0${number}` : number;
};

const TimeInput = ({ input, meta: { touched, error }, ...otherProps }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePickerMui
        ampm={false}
        error="true"
        openTo="hours"
        views={['hours', 'minutes', 'seconds']}
        inputFormat="HH:mm:ss"
        mask="__:__:__"
        {...otherProps}
        value={input.value}
        onChange={input.onChange}
        renderInput={(params) => (
          <TextField
            {...params}
            id={input.name}
            error={!!error && touched}
            onBlur={() => input.onBlur(input.value)}
            helperText={!!error && touched && error}
          />
        )}
      />
    </LocalizationProvider>
  );
};

const TimePicker = ({ id, label }) => {
  const formatDate = (value) => {
    if (value) {
      const dateValue = new Date();
      const splitedValue = value.split(':');
      dateValue.setHours(splitedValue[0]);
      dateValue.setMinutes(splitedValue[1]);
      dateValue.setSeconds(splitedValue[2]);

      return dateValue;
    }

    return null;
  };

  const normalizeDate = (value) => {
    if (typeof value === 'string') {
      return value;
    } else if (value instanceof Date && !isNaN(value)) {
      const hours = createNumberWithZero(value.getHours());
      const minutes = createNumberWithZero(value.getMinutes());
      const seconds = createNumberWithZero(value.getSeconds());

      return `${hours}:${minutes}:${seconds}`;
    }

    return null;
  };

  return (
    <Field
      name={id}
      label={label}
      component={TimeInput}
      normalize={normalizeDate}
      format={formatDate}
    />
  );
};

export default TimePicker;

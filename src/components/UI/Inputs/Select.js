import { Field } from 'redux-form';
import {
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
  Select as SelectMui,
} from '@mui/material';

const SelectInput = ({ input, meta: { error, touched }, ...otherProps }) => {
  return (
    <>
      <InputLabel id={`${input.name}-label`} error={!!error && touched}>
        {otherProps.label}
      </InputLabel>

      <SelectMui
        id={input.name}
        error={!!error && touched}
        labelId={`${input.name}-label`}
        {...input}
        {...otherProps}
      >
        <MenuItem value="">
          <em>{otherProps.label}</em>
        </MenuItem>

        {otherProps.options.map((option) => (
          <MenuItem value={option.value} key={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </SelectMui>

      {touched && error && <FormHelperText error>{error}</FormHelperText>}
    </>
  );
};

const Select = ({ id, label, options }) => {
  return (
    <FormControl fullWidth>
      <Field
        name={id}
        label={label}
        component={SelectInput}
        options={options}
      />
    </FormControl>
  );
};

export default Select;

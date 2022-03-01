import {
  MenuItem,
  InputLabel,
  FormControl,
  Select as SelectMui,
} from '@mui/material';

const Select = ({ id, value, label, options, onChange, ...otherProps }) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${id}-label`}>{label}</InputLabel>
      <SelectMui
        id={id}
        value={value}
        label={label}
        onChange={onChange}
        labelId={`${id}-label`}
        {...otherProps}
      >
        <MenuItem value="">
          <em>{label}</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem value={option.value}>{option.label}</MenuItem>
        ))}
      </SelectMui>
    </FormControl>
  );
};

export default Select;

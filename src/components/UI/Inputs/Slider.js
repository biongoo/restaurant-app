import { Field } from 'redux-form';
import {
  Box,
  Typography,
  Slider as SliderMui,
  FormHelperText,
} from '@mui/material';

const TextInput = ({ input, meta: { error }, label, ...otherProps }) => {
  return (
    <Box>
      <Typography id={otherProps.id} gutterBottom>
        {label}
      </Typography>

      <Box sx={{ width: '98%', margin: 'auto' }}>
        <SliderMui
          aria-label={label}
          valueLabelDisplay="auto"
          {...input}
          {...otherProps}
        />
        {error && <FormHelperText error>{error}</FormHelperText>}
      </Box>
    </Box>
  );
};

const Slider = (props) => {
  return (
    <Field
      name={props.id}
      {...props}
      component={TextInput}
      format={(value) => +value}
    />
  );
};

export default Slider;

import { connect } from 'react-redux';
import LoadingButton from '@mui/lab/LoadingButton';
import { Box, Stack, Typography } from '@mui/material';
import { reduxForm, formValueSelector } from 'redux-form';

import Select from '../UI/Inputs/Select';
import Slider from '../UI/Inputs/Slider';
import TextField from '../UI/Inputs/TextField';
import TimePicker from '../UI/Inputs/TimePicker';

const types = [
  { value: 'pizza', label: 'Pizza' },
  { value: 'soup', label: 'Soup' },
  { value: 'sandwich', label: 'Sandwich' },
];

const initialValues = {
  spiciness_scale: 1,
};

const validate = ({
  name,
  type,
  diameter,
  no_of_slices,
  spiciness_scale,
  slices_of_bread,
  preparation_time,
}) => {
  const errors = {};

  if (!name) {
    errors.name = 'Required name.';
  }

  if (!preparation_time) {
    errors.preparation_time = 'Required time (beetwen 0 to 24 hours).';
  }

  if (!type) {
    errors.type = 'Required type.';
  } else if (type === 'pizza') {
    if (!no_of_slices) {
      errors.no_of_slices = 'Required number of slices.';
    } else if (!Number.isInteger(+no_of_slices) || +no_of_slices < 1) {
      errors.no_of_slices = 'Value must be an integer integer greater than 0.';
    }

    if (!diameter) {
      errors.diameter = 'Required diameter.';
    } else if (+diameter <= 0) {
      errors.diameter = 'Value must be greater than 0.';
    }
  } else if (type === 'soup') {
    if (!spiciness_scale) {
      errors.spiciness_scale = 'Required spiciness scale.';
    } else if (
      +spiciness_scale < 1 ||
      +spiciness_scale > 10 ||
      !Number.isInteger(+spiciness_scale)
    ) {
      errors.spiciness_scale = 'Value must be an integer between 1 and 10.';
    }
  } else if (type === 'sandwich') {
    if (!slices_of_bread) {
      errors.slices_of_bread = 'Required number of slices.';
    } else if (!Number.isInteger(+slices_of_bread) || +slices_of_bread <= 0) {
      errors.slices_of_bread = 'Value must be an integer greater than 0.';
    }
  }

  return errors;
};

let AddDishForm = ({ type, invalid, handleSubmit, submitting }) => {
  let inputsBasedOnType;

  switch (type) {
    case 'pizza':
      inputsBasedOnType = (
        <>
          <TextField
            id="no_of_slices"
            label="Number of slices*"
            type="number"
            inputProps={{ step: 1, min: 1 }}
          />
          <TextField
            id="diameter"
            label="Diameter*"
            type="number"
            inputProps={{ step: 0.01, min: 1 }}
          />
        </>
      );
      break;
    case 'soup':
      inputsBasedOnType = (
        <Slider
          id="spiciness_scale"
          label="Spiciness scale*"
          defaultValue={1}
          step={1}
          min={1}
          max={10}
        />
      );
      break;
    case 'sandwich':
      inputsBasedOnType = (
        <TextField
          id="slices_of_bread"
          label="Slices of bread*"
          type="number"
          inputProps={{ step: 1, min: 1 }}
        />
      );
      break;
    default:
      break;
  }

  return (
    <Stack width="100%" maxWidth="500px" spacing={2}>
      <Typography variant="h5" align="center">
        Add dish
      </Typography>
      <Stack
        spacing={2}
        noValidate
        component="form"
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <TextField id="name" label="Dish name*" type="text" />
        <TimePicker id="preparation_time" label="Preparation time*" />
        <Select id="type" label="Type*" options={types} />
        {inputsBasedOnType}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <LoadingButton
            type="submit"
            loading={submitting}
            disabled={invalid}
            variant="outlined"
          >
            Save
          </LoadingButton>
        </Box>
      </Stack>
    </Stack>
  );
};

AddDishForm = reduxForm({
  form: 'addDish',
  touchOnChange: true,
  validate,
  initialValues,
})(AddDishForm);

const selector = formValueSelector('addDish');

AddDishForm = connect((state) => {
  const type = selector(state, 'type');
  return { type };
})(AddDishForm);

export default AddDishForm;

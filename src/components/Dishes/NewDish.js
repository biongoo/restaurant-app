import { useState } from 'react';
import { Stack } from '@mui/material';

import Select from '../UI/Inputs/Select';
import TextField from '../UI/Inputs/TextField';
import TimePicker from '../UI/Inputs/TimePicker';

const types = [
  { value: 'pizza', label: 'Pizza' },
  { value: 'soup', label: 'Soup' },
  { value: 'sandwich', label: 'Sandwich' },
];

const NewDish = () => {
  const [type, setType] = useState('');
  const [preparationTime, setPreparationTime] = useState(null);

  return (
    <Stack
      spacing={2}
      component="form"
      noValidate
      autoComplete="off"
      width="100%"
      maxWidth="500px"
    >
      <TextField id="dishName" label="Dish name" />
      <TimePicker
        value={preparationTime}
        onChange={(newValue) => setPreparationTime(newValue)}
        label="Preparation time"
      />

      <Select
        id="type"
        value={type}
        label="Type"
        options={types}
        onChange={(e) => setType(e.target.value)}
      />
    </Stack>
  );
};

export default NewDish;

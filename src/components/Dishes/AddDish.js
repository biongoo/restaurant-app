import { useState } from 'react';
import { Button } from '@mui/material';
import { SubmissionError } from 'redux-form';

import AddDishForm from './AddDishForm';
import Dialog from '../UI/Modals/Dialog';

const AddDish = () => {
  const [dialog, setDialog] = useState({ open: false, title: '', body: '' });

  const addDish = async ({
    name,
    type,
    diameter,
    no_of_slices,
    spiciness_scale,
    slices_of_bread,
    preparation_time,
  }) => {
    let typeBody;

    switch (type) {
      case 'pizza':
        typeBody = {
          no_of_slices: +no_of_slices,
          diameter: +diameter,
        };
        break;
      case 'soup':
        typeBody = { spiciness_scale: +spiciness_scale };
        break;
      case 'sandwich':
        typeBody = { slices_of_bread: +slices_of_bread };
        break;
      default:
        return;
    }

    try {
      const response = await fetch(
        'https://frosty-wood-6558.getsandbox.com:443/dishes',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            preparation_time,
            type,
            ...typeBody,
          }),
        }
      );

      const dataRes = await response.json();

      if (!response.ok) {
        throw dataRes;
      }

      setDialog({
        open: true,
        title: 'Success',
        body: `Id of created dish is ${dataRes.id}`,
      });
    } catch (err) {
      throw new SubmissionError(err);
    }
  };

  const handleCloseDialog = () => {
    setDialog((prev) => ({ ...prev, open: false }));
  };

  const buttons = (
    <Button variant="outlined" onClick={handleCloseDialog}>
      OK
    </Button>
  );

  return (
    <>
      <AddDishForm onSubmit={addDish} />
      <Dialog {...dialog} buttons={buttons} />
    </>
  );
};

export default AddDish;

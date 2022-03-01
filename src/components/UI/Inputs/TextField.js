import { TextField as TextFieldMui } from '@mui/material';

const TextField = ({ id, label, ...otherProps }) => {
  return (
    <TextFieldMui variant="outlined" id={id} label={label} {...otherProps} />
  );
};

export default TextField;

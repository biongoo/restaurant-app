import { Field } from 'redux-form';
import { TextField as TextFieldMui } from '@mui/material';

const TextInput = ({ input, meta: { error, touched }, ...otherProps }) => {
  return (
    <TextFieldMui
      id={input.name}
      variant="outlined"
      error={!!error && touched}
      helperText={!!error && touched && error}
      {...input}
      {...otherProps}
    />
  );
};

const TextField = (props) => {
  return <Field name={props.id} {...props} component={TextInput} />;
};

export default TextField;

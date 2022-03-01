import { Box } from '@mui/material';

const FormLayout = ({ children }) => {
  return (
    <Box display="flex" justifyContent="center" px={2} mt={5}>
      {children}
    </Box>
  );
};

export default FormLayout;

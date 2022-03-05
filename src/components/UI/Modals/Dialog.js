import {
  Box,
  Stack,
  Divider,
  Typography,
  DialogContent,
  DialogActions,
  Dialog as MuiDialog,
} from '@mui/material';

const Dialog = ({ open, handleClose, title, body, buttons }) => {
  return (
    <MuiDialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      sx={{
        '& .MuiDialog-paper': {
          m: 1,
          boxShadow: 24,
          width: '100%',
          borderRadius: 2,
          maxWidth: '600px',
          '&:focus-visible': {
            outline: 'none',
          },
        },
      }}
    >
      <Box my={2} mx={{ xs: 1.5, sm: 2.5 }}>
        <Typography variant="h5">{title}</Typography>
      </Box>

      <Divider />

      <DialogContent sx={{ p: 0, my: 2, mx: { xs: 1.5, sm: 2.5 } }}>
        {body}
      </DialogContent>

      {buttons && (
        <>
          <Divider />
          <DialogActions sx={{ py: 1.5, px: 2.5 }}>
            <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              {buttons}
            </Stack>
          </DialogActions>
        </>
      )}
    </MuiDialog>
  );
};

export default Dialog;

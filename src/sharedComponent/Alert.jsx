import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Alert, Snackbar } from '@mui/material';

const AlertComponent = ({ handleAlertClose,alertType,alertMessage}) => {
  return <>
  <Snackbar anchorOrigin={{ vertical:"bottom", horizontal:"center" }}  sx={{left:"50%"}} open={true} autoHideDuration={3000} onClose={handleAlertClose}>
      <Alert
        severity={alertType==="success"?"success":"error"}
        sx={{ width: '100%', display: 'flex', alignItems: 'center' }}
      >
        {alertMessage}
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={handleAlertClose}
          sx={{ marginLeft: 'auto', padding: '8px' }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Alert>
    </Snackbar>
  </>

};

export default AlertComponent;
import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export default function CustomAlert(props) {
  const { severity, title, message, strongMessage, onClose } = props;

  /* 
  Severity Types:
  error
  warning
  info
  success
  */

  return (
    <Alert severity={severity} onClose={() => onClose()}>
      <AlertTitle>{title}</AlertTitle>
      {message} — {strongMessage ? <strong>{strongMessage}</strong> : null}
    </Alert>
  );
}

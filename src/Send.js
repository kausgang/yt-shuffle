import React from "react";
import Button from "@mui/material/Button";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

function Send(props) {
  return (
    <Button
      variant="outlined"
      size="large"
      endIcon={<SendRoundedIcon />}
      onClick={props.onSend}
    >
      Get
    </Button>
  );
}

export default Send;

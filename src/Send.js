import React from "react";
import Button from "@mui/material/Button";
import SendRoundedIcon from "@mui/icons-material/SendRounded";

function Send() {
  return (
    <Button variant="outlined" size="large" endIcon={<SendRoundedIcon />}>
      Send
    </Button>
  );
}

export default Send;

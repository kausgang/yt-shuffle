import React from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import Input from "@mui/material/Input";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import Send from "./Send";

function InputURL() {
  return (
    // <TextField
    //   id="standard-basic"
    //   label="Youtube Playlist"
    //   variant="standard"
    // />

    // <FormControl fullWidth sx={{ m: 1 }} variant="standard">
    //   <InputLabel>Youtube Playlist</InputLabel>
    //   <Input
    //     id="standard-adornment-amount"
    //     startAdornment={<InputAdornment position="start"></InputAdornment>}
    //   />
    // </FormControl>

    <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <TextField
        id="standard-basic"
        label="Youtube Playlist"
        variant="standard"
        InputProps={{
          //   endAdornment: <SendRoundedIcon fontSize="large" color="primary" />,
          endAdornment: <Send />,
        }}
      />
    </FormControl>
  );
}

export default InputURL;

import logo from "./logo.svg";
import "./App.css";
import InputURL from "./InputURL";
import Grid from "@mui/material/Grid";
import LastPlaylist from "./LastPlaylist";

function App() {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <InputURL />
      <LastPlaylist />
    </Grid>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import InputURL from "./InputURL";
import Grid from "@mui/material/Grid";
import LastPlaylist from "./LastPlaylist";
import Video from "./Video";
import Example from "./Example";

function App() {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columnSpacing={1}
      >
        {/* <Grid> */}
        <InputURL />
        {/* </Grid> */}

        {/* <Grid> */}
        <LastPlaylist />
        {/* </Grid> */}
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Example />
      </Grid>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import InputURL from "./InputURL";
import Grid from "@mui/material/Grid";
import LastPlaylist from "./LastPlaylist";
// import Video from "./Video";
// import Example from "./Example";
import YTVideo from "./YTVideo";
import { useState } from "react";

function App() {
  const [currentlyPlaying, setCurrentlyPlaying] = useState("2g811Eo7K8");
  const _nextVideo = (e) => {
    alert("next");
    setCurrentlyPlaying("uVxwwbTbDyg");
  };
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
        {/* <Example /> */}
        <YTVideo videoID={currentlyPlaying} nextVideo={_nextVideo} />
      </Grid>
    </>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import InputURL from "./InputURL";
import Grid from "@mui/material/Grid";
import LastPlaylist from "./LastPlaylist";
// import Video from "./Video";
// import Example from "./Example";
import YTVideo from "./YTVideo";
import { useState } from "react";
import ytpl from "ytpl";

function App() {
  // const [currentlyPlaying, setCurrentlyPlaying] = useState("2g811Eo7K8");
  // const _nextVideo = (e) => {
  //   alert("next");
  //   setCurrentlyPlaying("uVxwwbTbDyg");
  // };

  const [playlist, setPlaylist] = useState("");

  const _onPlaylistChange = (e) => {
    setPlaylist(e.target.value);
  };

  const _onSend = () => {
    getvideos(playlist);
  };

  async function getvideos(playlist) {
    let firstResultBatch;
    //   const firstResultBatch = await ytpl(
    //     "https://www.youtube.com/watch?v=crGwlHruS08&list=PLUz6MeIUbC-ZGa1MXs2VGC9Rk3VYl57gY&index=440&ab_channel=SubhajitKhushDas",
    //     { pages: "Infinity" }
    //   );

    firstResultBatch = await ytpl(
      "https://www.youtube.com/watch?v=crGwlHruS08&list=PLUz6MeIUbC-ZGa1MXs2VGC9Rk3VYl57gY&index=440&ab_channel=SubhajitKhushDas",
      { pages: "Infinity" }
    );
    //   secondResultBatch = ytpl.continueReq(firstResultBatch.continuation);
    //   const secondResultBatch = ytpl.continueReq(firstResultBatch.continuation);
    //   const thirdResultBatch = ytpl.continueReq(secondResultBatch.continuation);

    console.log(firstResultBatch.items.length);
    //   console.log(secondResultBatch.items);
    //   //   console.log(thirdResultBatch.items);
  }

  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        columnSpacing={1}
      >
        <InputURL onSend={_onSend} onPlaylistChange={_onPlaylistChange} />

        <LastPlaylist />
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        {/* <Example /> */}
        {/* <YTVideo videoID={currentlyPlaying} nextVideo={_nextVideo} /> */}
        Youtube doesnot allow autoplay in embeded iframe. either
      </Grid>
    </>
  );
}

export default App;

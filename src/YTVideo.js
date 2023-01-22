import React from "react";
import YouTube from "react-youtube";

function YTVideo(props) {
  console.log(`props.videoID`);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  function _onReady(event) {
    // access to player in all event handlers via event.target

    //developers.google.com/youtube/iframe_api_reference#Events
    // event.target.pauseVideo();
    event.target.playVideo();
  }

  const _onStateChange = (e) => {
    let videoEnded = e.target.getPlayerState();

    if (videoEnded === 0) props.nextVideo(e);
  };

  return (
    <YouTube
      //   videoId="2g811Eo7K8U"
      videoId="`props.videoID`"
      opts={opts}
      onReady={_onReady}
      onStateChange={_onStateChange}
    />
  );
}

export default YTVideo;

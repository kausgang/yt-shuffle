import React from "react";

{
  /* <iframe width="560" height="315" src="https://www.youtube.com/embed/cYOB941gyXI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */
}

function Video(props) {
  let id = "g6fnFALEseI";
  let vdoURL =
    "https://www.youtube.com/embed/" + id + "?autoplay=1&enablejsapi=1";
  console.log(vdoURL);
  return (
    <iframe
      width="560"
      height="315"
      //   src="https://www.youtube.com/embed/cYOB941gyXI"
      src="https://www.youtube.com/watch?v=uVxwwbTbDyg"
    ></iframe>

    // <video id="video" width="60%" controls>
    //   <source
    //     src="https://www.youtube.com/embed/cYOB941gyXI"
    //     type="video/mp4"
    //   />
    //   {/* <source
    //       src="./VIDEO/[HQ] Requiem for a dream (Piano cover) (720p_30fps_H264-128kbit_AAC).mp4"
    //       type="video/mp4"
    //     /> */}
    //   Your browser does not support HTML video.
    // </video>
  );
}

export default Video;

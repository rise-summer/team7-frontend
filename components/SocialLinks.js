import React from "react";
import twitterLogo from "../assets/twitter_logo.png";

function images() {
  return (
    <img
      src={twitterLogo}
      style={{
        width: 18,
        height: 18,
        borderRadius: 400 / 2,
      }}
    />
  );
}

export default images;

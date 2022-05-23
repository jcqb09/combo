import React, { useState } from "react";

export default function Thumbnail({ media }) {
  console.log(media);
  if (media.media.length > 0) {
    console.log(media.media);
    return (
      <div>
        <img
          src={media.media[0]["media-metadata"][1]["url"]}
          alt={media.media[0].caption}
        />
        <p style={{ fontSize: "small" }}> {media.media[0].caption}</p>
      </div>
    );
  }
}

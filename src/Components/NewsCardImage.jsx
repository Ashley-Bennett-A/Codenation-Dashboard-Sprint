import React from "react";

function NewsCardImage(props) {
  let className;
  let image;
  if (props.image !== null) {
    image = props.image;
    className = "newsCardImage";
  } else {
    image = "https://www.placecage.com/300/200";
    className = "newsCardImage";
  }

  return (
    <div className={className}>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="" />
      </a>
    </div>
  );
}

export default NewsCardImage;

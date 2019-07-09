import React from "react";

function NewsCardImage(props) {
  let className;
  if (props.img !== null) {
    className = "newsCardImage";
  } else {
    className = "noImage";
  }

  return (
    <div className={className}>
      <img src={props.image} alt="" />
    </div>
  );
}

export default NewsCardImage;

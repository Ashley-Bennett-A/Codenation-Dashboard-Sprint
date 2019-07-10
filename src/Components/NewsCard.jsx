import React from "react";
import NewsCardImage from "./NewsCardImage";
import NewsCardText from "./NewsCardText";

function NewsCard(props) {
  return (
    <div className="newsCard">
      <NewsCardImage image={props.image} />
      <NewsCardText title={props.title} subtitle={props.subtitle} />
    </div>
  );
}

export default NewsCard;

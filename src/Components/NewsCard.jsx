import React from "react";
import NewsCardImage from "./NewsCardImage";
import NewsCardText from "./NewsCardText";

function NewsCard(props) {
  return (
    <div className="newsCard">
      {/* <img src={props.image} alt="" /> */}
      <NewsCardImage image={props.image} />
      {/* <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2> */}
      <NewsCardText title={props.title} subtitle={props.subtitle} />
    </div>
  );
}

export default NewsCard;

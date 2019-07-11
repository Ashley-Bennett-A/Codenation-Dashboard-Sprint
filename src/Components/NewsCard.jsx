import React from "react";
import NewsCardImage from "./NewsCardImage";
import NewsCardText from "./NewsCardText";

function NewsCard(props) {
  return (
    <div className="newsCard">
      <NewsCardImage image={props.image} link={props.link} />
      <NewsCardText
        title={props.title}
        subtitle={props.subtitle}
        link={props.link}
      />
    </div>
  );
}

export default NewsCard;

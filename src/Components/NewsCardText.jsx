import React from "react";

function NewsCardText(props) {
  return (
    <div className="newsCardText">
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <h1>{props.title}</h1>
      </a>
    </div>
  );
}
export default NewsCardText;

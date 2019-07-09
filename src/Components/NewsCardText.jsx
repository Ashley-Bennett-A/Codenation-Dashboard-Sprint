import React from "react";

function NewsCardText(props) {
  return (
    <div className="newsCardText">
      <h1>{props.title}</h1>
      <h2>{props.subtitle}</h2>
    </div>
  );
}
export default NewsCardText;

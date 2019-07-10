import React from "react";

function Search(props) {
  const script = document.createElement("script");

  script.src =
    "https://cse.google.com/cse.js?cx=014243001718978014851:jpozzqu5h-s";
  script.async = true;

  document.body.appendChild(script);
  return <div class="gcse-searchbox-only" />;
}

export default Search;

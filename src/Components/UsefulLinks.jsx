import React from "react";
import StackLogo from "./assets/stackOverflow.svg";
import CodepenLogo from "./assets/codepen.png";
import CodesandboxLogo from "./assets/codesandbox.svg";
import CsstricksLogo from "./assets/csstricks.png";
import FontawesomeLogo from "./assets/fontawesome.svg";
import GooglefontLogo from "./assets/googlefonts.png";
import baddassLogo from "./assets/bada55_io.png";
import hexaLogo from "./assets/hexacolor.png";
import "./UsefulLinks.css"

function UsefulLinks(props) {
  let websites = [
    {
      site: "https://stackoverflow.com/",
      name: "Stack Overflow",
      image: StackLogo
    },
    { site: "https://codepen.io/", name: "CodePen", image: CodepenLogo },
    {
      site: "https://codesandbox.io/",
      name: "CodeSandbox",
      image: CodesandboxLogo
    },
    {
      site: "https://css-tricks.com/",
      name: "CSS-Tricks",
      image: CsstricksLogo
    },
    {
      site: "https://fontawesome.com/",
      name: "Font Awesome",
      image: FontawesomeLogo
    },
    {
      site: "https://fonts.google.com/",
      name: "Google Fonts",
      image: GooglefontLogo
    },
    { site: "http://bada55.io/", name: "bada55.io", image: baddassLogo },
    { site: "https://www.colorhexa.com/", name: "Color Hexa", image: hexaLogo }
  ];
  return (
    <div className="usefulLinksContainer">
      <h1>Useful Links</h1>
      <div className="usefulLinksContainerInner">
        {websites.map(websites => {
          return (
            <div className="usefulLink">
              <a href={websites.site} target="_blank" rel="noopener noreferrer">
                <img src={websites.image} alt="" />
                <p>{websites.name}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UsefulLinks;

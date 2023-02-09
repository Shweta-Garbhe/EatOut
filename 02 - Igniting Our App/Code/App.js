import React from "react";
import ReactDom from "react-dom/client";

const header1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Hello World From Parcel!"
);

const header2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Hello World from Parcel again!"
);

const Container = React.createElement(
  "div",
  {
    id: "container",
  },
  [header1, header2]
);

const reactRoot = ReactDom.createRoot(document.getElementById("root"));

reactRoot.render(Container);

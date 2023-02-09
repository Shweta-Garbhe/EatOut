const header1 = React.createElement(
  "h1",
  {
    id: "title1",
  },
  "Hello World!"
);

const header2 = React.createElement(
  "h2",
  {
    id: "title2",
  },
  "Hello World!"
);

const container = React.createElement(
  "container",
  {
    id: "container",
  },
  [header1, header2]
);

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(container);

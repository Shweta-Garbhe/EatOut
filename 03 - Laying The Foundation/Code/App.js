import React from "react";
import ReactDOM from "react-dom/client";

const Title = function () {
  return <h1 id="title">Eat Out - Food Ordering App </h1>;
};

const HeaderComponent = () => {
  return (
    <div>
      <Title />
      <h2> Eat Out - APP Body Here...!!!!</h2>
      <h4> Functional component</h4>
    </div>
  );
};

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));

reactRoot.render(<HeaderComponent />);

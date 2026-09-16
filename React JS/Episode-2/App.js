import React from "react";
import ReactDOM from "react-dom/client";

const Episode1 = () => {
  // Pure React to html
  const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child", key: "first child" }, [
      React.createElement("p", { id: "paragraph" }, "it's a paragraph"),
      React.createElement("h3", { id: "h3" }, "it's the h3"),
    ]),
    React.createElement("div", { id: "child" }, [
      React.createElement("p", { id: "paragraph" }, "it's a paragraph"),
      React.createElement("h3", { id: "h3" }, "it's the h3"),
    ]),
  ]);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
};

const Episode2 = () => {
  // // React.createElement => ReactElement-JS Object => HTMLElement(render)
  // const heading = React.createElement(
  //   "h1",
  //   { id: "heading" },
  //   "Namaste React 🚀",
  // );
  // console.log(heading);
  // // JSX (transpiled before it reaches the JS) - PARCEL - Babel
  // // JSX => Babel convert it to React.createElement => ReactElement-JS Object => HTMLElement(render)
  // const jsxHeading = <h1 id="heading"> Namsate React using JSX /🚀</h1>;
  // console.log(jsxHeading);
  // const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(jsxHeading);
};

const Episode3 = () => {
  // React Functional Component
  const HeadingComponent2 = () => (
    <div className="container">
      {heading}
      <HeadingComponent />
      <h1 className="heading">Namaste React Functional Component🚀</h1>
    </div>
  );

  const HeadingComponent = () => (
    <h1 className="heading">Namaste React Functional Component!</h1>
  );

  // React Element
  const heading = <h1 className="head">Namsate React Using JSX 🚀</h1>;

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<HeadingComponent2 />);
};


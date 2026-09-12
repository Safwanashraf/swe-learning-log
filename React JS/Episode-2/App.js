const heading2 = React.createElement(
  "div",
  { id: "div1" },
  [React.createElement("h1", {id:"heading3"}, "This is nested heading3"), React.createElement("div", {}, [React.createElement("p", {id:"paragraph"}, "it's a paragraph"), React.createElement("h3", {}, "it's the h3")])],
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading2);

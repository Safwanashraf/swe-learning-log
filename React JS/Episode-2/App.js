import React from "react";
import ReactDOM from "react-dom/client"

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child", key:"first child" }, [
    React.createElement("p", { id: "paragraph" }, "it's a paragraph"),
    React.createElement("h3", { id: "h3"}, "it's the h3"),
  ]),
  React.createElement("div", { id: "child"}, [
    React.createElement("p", { id: "paragraph" }, "it's a paragraph"),
    React.createElement("h3", {id: "h3"}, "it's the h3"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

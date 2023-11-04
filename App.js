// const heading = React.createElement(
//   "h1",
//   { id: "head", className: "heading" },
//   "Hello from react!"
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const heading1 = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hello from h1"),
    React.createElement("h2", {}, "Hello from h2"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading1);

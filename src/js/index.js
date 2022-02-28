//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import App from "./App";

//import your own components
import Home from "./component/Todo.js";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));

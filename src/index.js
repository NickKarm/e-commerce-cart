import React from "react";
//import ReactDOM  from "react-dom";
import {createRoot} from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.css";
import App from "./app";

const root = createRoot(document.querySelector("#root"));
root.render(<App/>); //ReactDOM.render, document.querySelector("#root")
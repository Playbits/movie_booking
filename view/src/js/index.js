import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/container/Header.jsx";
import Homepage from "./components/presentational/homepage.jsx";

import * as serviceWorker from "../serviceWorker";

const menuObj = ["Home", "About", "Movies", "Contact Us"];

const menu = <Header menu={menuObj} />;
ReactDOM.render(menu, document.getElementById("header"));
ReactDOM.render(Homepage, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

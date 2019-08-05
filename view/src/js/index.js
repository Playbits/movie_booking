import React from "react";
import ReactDOM from "react-dom";
import Banner from "./components/container/Banner.jsx";
import Header from "./components/container/Header.jsx";

import * as serviceWorker from "../serviceWorker";

const menuObj = ["Home", "About", "Movies", "Contact Us"];
const bannerSlides = [1,2,3];
const menu = <Header menu={menuObj} />;
const bannerOutput = <Banner slides={bannerSlides} />;

ReactDOM.render(menu, document.getElementById("header"));
ReactDOM.render(bannerOutput, document.getElementById("root"));
// ReactDOM.render(<p>Abiola</p>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

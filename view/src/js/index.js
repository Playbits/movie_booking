import React from 'react';
import ReactDOM from 'react-dom';
// import App from './components/container/App.jsx';
import Header from './components/container/header.jsx';

import * as serviceWorker from '../serviceWorker';

// ReactDOM.render(App, document.getElementById('root'));
const menuObj = ['Home','About','Movies','Contact Us'];
const menu = <Header LogoName='abiola' menu={menuObj} />
ReactDOM.render(menu, document.getElementById('header'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

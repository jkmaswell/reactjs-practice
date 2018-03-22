import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouter, UIView} from '@uirouter/react';
import {plugins, states, config} from "./configs/router.config";
import NavBar from "./components/navbar/navbar.component";
import Header from "./components/header/header.component";
import './index.css'

const App = () => (
    <div>
        <NavBar />
        <Header />
        <UIView className="content"/>
    </div>
);

ReactDOM.render(
    <UIRouter plugins={plugins} states={states} config={config}>
        <App />
    </UIRouter>,
    document.getElementById("root")
);
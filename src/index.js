import React from 'react';
import ReactDOM from 'react-dom';
import {UIRouter, UIView} from '@uirouter/react';
import {plugins, states, config} from "./configs/router.config";
import NavBar from "./components/navbar/navbar";



const App = () => (
    <div>
        <NavBar />
        <UIView className="main"/>
    </div>
);

ReactDOM.render(
    <UIRouter plugins={plugins} states={states} config={config}>
        <App />
    </UIRouter>,
    document.getElementById("root")
);
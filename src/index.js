import React, {Component} from "react";
import ReactDOM from "react-dom";
import App from "./components/app";

import {createStore} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/index";

const store = createStore(reducers);

const scss = require("../style/style.scss");

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

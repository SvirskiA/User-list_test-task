import React from "react";
import ReactDOM from "react-dom";
import store from "./store/store";
import { Provider } from 'react-redux';
import App from "./App";

import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);

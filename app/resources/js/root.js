import React from "react";
import ReactDOM from "react-dom";

import Home from "./pages/Home";

const Root = () => {
    return <Home />;
};

export default Root;

if (document.getElementById("root")) {
    ReactDOM.render(<Root />, document.getElementById("root"));
}
